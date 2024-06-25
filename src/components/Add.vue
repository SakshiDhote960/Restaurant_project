<template>
    <body>
    <Header />
    <h1 class="hello">Hello user, Welcome on Add Restaurant Page.</h1>
    <form class="add">
        <input type="text" name="name" placeholder="Enter Name" v-model="restaurant.name" />
        <input type="text" name="address" placeholder="Enter address" v-model="restaurant.address" />
        <input type="text" name="contact" placeholder="Enter contact" v-model="restaurant.contact" />
        <button type="button" v-on:click="addRestaurant">Add new Restaurant</button>
    </form>
    </body>
</template>

<script>
import Header from './Header.vue';
import axios from 'axios';
export default{
    name:"Add",
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
        async addRestaurant()
        {
            console.log(this.restaurant);
            const result = await axios.post("http://localhost:3000/restaurant",{
                name:this.restaurant.name,
                address:this.restaurant.address,
                contact:this.restaurant.contact,
            });
            if(result.status==201)
            {
                this.$router.push({name:'home'});
            }
            console.log("result",result);
        }
    },
    mounted()
    {
        let user= localStorage.getItem('user-info');
        if(!user)
        {
            this.$router.push({name:'signup'})   
        }
    }
}
</script>

<style scoped>
body{
    margin: 0;
    padding: 0;
    background-image: url(/src/assets/img2.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    height: 605px;
}
.hello{
    color: rgb(216, 231, 75);
    text-align: center;
    margin-top: 30px;
    margin-bottom: 30px;
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