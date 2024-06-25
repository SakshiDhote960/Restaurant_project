<template>
    <body>
    <Header />
    <h1 class="hello">Hello user, Welcome on Update Restaurant Page.</h1>
    <form class="add">
        <input type="text" name="name" placeholder="Enter Name" v-model="restaurant.name" />
        <input type="text" name="address" placeholder="Enter address" v-model="restaurant.address" />
        <input type="text" name="contact" placeholder="Enter contact" v-model="restaurant.contact" />
        <button type="button" v-on:click="updateRestaurant">Update Restaurant</button>
    </form>
    </body>
</template>

<script>
import Header from './Header.vue';
import axios from 'axios';
export default{
    name:"Update",
    components:{
        Header
    },
    data()
    {
        return {
            restaurant :{
                name:'',
                address:'',
                contact:''
            }
        }
    },
    methods:{
        async updateRestaurant()
        {
            console.log(this.restaurant);
            const result = await axios.put("http://localhost:3000/restaurant/"+this.$route.params.id,{
                name:this.restaurant.name,
                address:this.restaurant.address,
                contact:this.restaurant.contact,
            });
            if(result.status==200)
            {
                this.$router.push({name:'home'});
            }
        }
    },
    async mounted()
    {
        let user= localStorage.getItem('user-info');
        if(!user)
        {
            this.$router.push({name:'signup'})   
        }
        const result = await axios.get('http://localhost:3000/restaurant/'+this.$route.params.id)
        console.log(result.data);
        this.restaurant=result.data;
    }
}
</script>

<style scoped>
body{
    margin: 0;
    padding: 0;
    background-image: url(/src/assets/img_bg.webp);
    background-repeat: no-repeat;
    background-size: cover;
    height: 605px;
}
.hello{
    color: rgb(216, 231, 75);
    text-align: center;
    margin-top: 30px;
    margin-bottom: 20px;
}
.add input{
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid skyblue;
}
.add button {
    width: 300px;
    height: 40px;
    border: 1px solid skyblue;
    color: #fff;
    background-color: rgb(13, 177, 241);
    cursor: pointer;
    display: block;
    margin-left: auto;
    margin-right: auto;
}
</style>