<template>
    <div>
        <ChessBoardControls
            @start="goToStart"
            @undo="stepBack"
            @save="saveHistory"
            @swap-side="swapSide"
            @finish="goToFinish"
            @next="stepForward" />
        <div ref="board" class="cg-board-wrap" v-resize="loadPosition"></div>
        <!-- Game history -->
        <!-- <v-chip 
            outline 
            color="green"
            v-for="(historyItem, idx) in history" 
            :key="idx"
            @click="goTo(idx, historyItem)"
        >{{ historyItem }}</v-chip> -->
    </div>
</template>

<script>
import Chess from 'chess.js'
import { Chessground } from 'chessground'
import { uniques } from './Util.js'

import ChessBoardControls from './ChessBoardControls'
import { mapActions } from 'vuex'

export default {
    props: {
        fen: {
            type: String,
            default: '',
        },
        history: {
            type: Array,
            default: [],
        },
        free: {
            type: Boolean,
            default: false,
        },
        showThreats: {
            type: Boolean,
            default: false,
        },
        onPromotion: {
            type: Function,
            default: () => 'q',
        },
    },
    components: {
        ChessBoardControls
    },
    methods: {
        ...mapActions('games', [ 'setHistory' ]),
        goTo(idx, historyItem) {
            this.chess.reset();
            for(let i = 0; i <= idx; i++) {
                let item = this.history[i];

                this.chess.move(item);
                this.board.set({
                    fen: this.chess.fen()
                });
            }
        },
        goToStart() {
            this.chess.reset();
            this.board.set({
                fen: this.chess.fen(),
            });
            console.log(this.board.state.turnColor);
        },
        goToFinish() {
            this.chess.load(this.fen);
            this.board.set({
                fen: this.chess.fen()
            });
        },
        stepBack() {
            this.chess.undo();
            this.board.set({
                fen: this.chess.fen()
            });
        },
        stepForward() {
            console.log('...')
        },
        saveHistory() {
            let game = this.$store.getters['games/getCurrentGame'];
            this.setHistory({
                gameId: game._id,
                history: this.chess.history(),
                fen: this.chess.fen()
            });
        },
        swapSide() {
            this.board.toggleOrientation();
        },
        paintThreats () {
            let moves = this.chess.moves({ verbose: true })
            let threats = []
            moves.forEach(function (move) {
                threats.push({ orig: move.to, brush: 'yellow' })

                if (move['captured']) {
                    threats.push({ orig: move.from, dest: move.to, brush: 'red' })
                }
                if (move['san'].includes('+')) {
                    threats.push({ orig: move.from, dest: move.to, brush: 'blue' })
                }
            })

            this.board.setShapes(threats)
        },
        calculatePromotions () {
            let moves = this.chess.moves({ verbose: true })
            this.promotions = []
            for (let move of moves) {
                if (move.promotion) {
                    this.promotions.push(move);
                }
            }
        },
        afterMove () {
            if(this.chess.game_over()) {
                alert('The game is over...')
            } else {
                if(this.chess.in_check()) {
                    console.log('check...');
                }
    
                if (this.showThreats) {
                    this.paintThreats();
                }
    
                let threats = this.countThreats(this.toColor())
                threats['history'] = this.chess.history();
                threats['fen'] = this.chess.fen();
                this.$emit('onMove', threats);
            }
        },
        loadPosition() {
            this.chess.load(this.fen);
            this.board = Chessground(this.$refs.board, {
                fen: this.chess.fen(),
                turnColor: this.toColor(),
                movable: {
                    free: this.free,
                    color: this.toColor(),
                    dests: this.possibleMoves(),
                },
                animation: {
                    enabled: true,        // enable piece animations, moving and fading
                    duration: 200,        // animation duration in milliseconds
                },
            })

            this.board.set({
                movable: { 
                    events: { 
                        after: this.changeTurn() 
                    } 
                },
            })
        },
        changeTurn() {
            return (orig, dest, metadata) => {                
                if (this.isPromotion(orig, dest)) {
                    this.promoteTo = this.onPromotion()
                }
                
                this.chess.move({from: orig, to: dest, promotion: this.promoteTo}) // promote to queen for simplicity
                
                this.board.set({
                    fen: this.chess.fen(),
                    turnColor: this.toColor(),
                    movable: {
                        color: this.toColor(),
                        dests: this.possibleMoves(),
                    },
                })
                
                this.calculatePromotions()
                this.afterMove()
            }
        },
        isPromotion(orig, dest) {
            let filteredPromotions = this.promotions.filter(move => move.from === orig && move.to === dest)
            return filteredPromotions.length > 0 // The current movement is a promotion
        },
        possibleMoves() {
            const dests = {}
            this.chess.SQUARES.forEach(s => {
                const ms = this.chess.moves({square: s, verbose: true})
                if (ms.length) dests[s] = ms.map(m => m.to)
            })
            
            return dests;
        },
        toColor () {
            return (this.chess.turn() === 'w') ? 'white' : 'black'
        },
        countThreats(color) {
            let threats = {}
            let captures = 0
            let checks = 0
            let moves = this.chess.moves({verbose: true})
            if (color !== this.toColor()) {
                moves = this.opponentMoves()
            }

            if (moves.length === 0) {
                return null // It´s an invalid position
            }

            moves.forEach(function (move) {
                if (move['captured']) {
                    captures++
                }
                if (move['san'].includes('+')) {
                    checks++
                }
            })

            threats[`legal_${color}`] = uniques(moves.map(x => x.from + x.to)).length // promotions count as 4 moves. This remove those duplicates moves.
            threats[`checks_${color}`] = checks
            threats[`threat_${color}`] = captures
            threats[`turn`] = color
            
            return threats
        }
    },
    data() {
        return {
            stepBackFen: null,
            stepForwardFen: null
        }
    },
    mounted() {
        this.loadPosition();
    },
    created() {
        this.chess = new Chess();
        this.board = null;
        this.promotions = [];
        this.promoteTo = 'q';
    }
}
</script>

<style scoped>
    @import url('./theme.css');
</style>
