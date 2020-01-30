<script>
import { Pie } from 'vue-chartjs'

export default {
    props: {
        playerStats: Array
    },
    extends: Pie,
    mounted () {
        let labels = [];
        let data = [];
        // Retrieve the data from props
        for(let i = 0; i < this.playerStats.length; i++) {
            let statItem = this.playerStats[i];

            labels.push(statItem.text);
            data.push(statItem.value);
        }

        // Overwriting base render method with actual data.
        this.renderChart({
            labels: labels,
            datasets: [
                {
                    backgroundColor: [ '#0057A0', '#27AE60', '#C0392B' ],
                    data: data
                }
            ]
        }, {responsive: true, fontColor: 'white' })
    }
}
</script>

<style lang="scss">
    
</style>