<template>
    <div>
        <h1>Moives</h1>
        <div class="row">
            <div class="col-lg-4" v-for="(mv, idx) in MovieList" :key="idx">
                <mvCard
                    :Name="mv.Name"
                    :ImageUrl="mv.Image"
                    :Description="mv.Description"
                    :Time="mv.Time"
                >
                </mvCard>
            </div>
        </div>

        <div class="row">
            <div class="col-lg-12">
                <h4>Pin Movie</h4>
                <h5  v-for="(pm, idx) in PinMoive" :key="idx">{{pm}}</h5>
            </div>
        </div>
    </div>
</template>

<script>
import MovieCard from "../components/MovieCard.vue"
export default {
    components:{
        mvCard:MovieCard
    },
    data(){
        return{
            MovieList:[
                {
                    Name:"Avenger Endgame",
                    Image:"https://upload.wikimedia.org/wikipedia/th/d/d4/%E0%B8%94%E0%B8%B4%E0%B8%AD%E0%B9%80%E0%B8%A7%E0%B8%99%E0%B9%80%E0%B8%88%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B8%AA_itunes.jpg",
                    Description:"อเวนเจอร์ เอ็นเกม",
                    Time:"15:00"
                },
                {
                    Name:"SpiderMan",
                    Image:"https://terrigen-cdn-dev.marvel.com/content/prod/1x/snh_online_6072x9000_posed_01.jpg",
                    Description:"ไอ้แมงมุม",
                    Time:"15:00"
                },
                {
                    Name:"Avenger Endgame",
                    Image:"https://upload.wikimedia.org/wikipedia/th/d/d4/%E0%B8%94%E0%B8%B4%E0%B8%AD%E0%B9%80%E0%B8%A7%E0%B8%99%E0%B9%80%E0%B8%88%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B8%AA_itunes.jpg",
                    Description:"อเวนเจอร์ เอ็นเกม",
                    Time:"15:00"
                }
            ],
            PinMoive:[]
        }
    },
    mounted(){
        this.emitter.on('PinMovie', (mv)=> {
            this.PinMoive.push(mv);
        });
    }
}
</script>

<style>

</style>