<template>
  <div>
      <b-card no-body class="overflow-hidden mb-2" style="max-width: 540px;">
        <b-row no-gutters>
            <b-col md="6">
                <b-card-img :src="MovieImage" alt="Image" class="rounded-0"></b-card-img>
            </b-col>
            <b-col md="6">
                <b-card-body :title="MovieName">
                    <b-card-text>
                        {{MovieDescription}}
                    </b-card-text>
                    <h5 class="text-danger">{{MovieTime}}</h5>
                    <b-button class="btn btn-info" @click="GoToDetail(MovieName)">Detail</b-button>
                </b-card-body>

                <h2 v-if="BookMovieName == MovieName" class="text-success">
                    เลือกหนังเรื่องนี้แล้ว                    
                </h2>

                <b-button class="btn btn-success block" @click="Pin(MovieName)">Pin</b-button>

                <b-button class="btn btn-dark ml-1" @click="Book(MovieName)">Book</b-button>
                <b-button class="btn btn-warning ml-1" @click="Unbook()" :disabled="!IsBooked">ยกเลิกจอง</b-button>

            </b-col>
        </b-row>
    </b-card>
  </div>
</template>

<script>
export default {
    props:{
        ImageUrl:String,
        Name:String,
        Description:String,
        Time:String
    },
    data(){
        return{
            MovieImage:"",
            MovieName:"",
            MovieDescription:"",
            MovieTime:"",
            BookMovieName:"",
            IsBooked:false
        }
    },
    methods:{
        GoToDetail(_MovieName){
            this.$router.push({name:'D', params: {Name:_MovieName, Number:1}});
        },
        Book(_MovieName){
            this.BookMovieName = _MovieName;
        },
        Unbook(){
            this.IsBooked = false;
        },
        Pin(_MovieName){
            this.emitter.emit('PinMovie',_MovieName);
        }
    },
    mounted(){
        this.MovieImage = this.ImageUrl;
        this.MovieName = this.Name;
        this.MovieDescription = this.Description;
        this.MovieTime = this.Time;
    },
    watch:{
        BookMovieName(_new){
            if(_new != ""){
                console.log("NEW:"+_new);
                this.IsBooked = true;
            }
        },
        IsBooked(_new){
            if(_new == false){
                this.BookMovieName = "";
            }
        }
    }
}
</script>

<style>

</style>