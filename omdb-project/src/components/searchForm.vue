<template>
    <div class="container">
        <ValidationObserver v-slot="{ handleSubmit}">
        <nav class="navbar navbar-light justify-content-center align-items-center m-1">
            <form @submit.prevent="handleSubmit(search)" class="form-inline">
                <label class="mr-1 h3 font-weight-bold">Please enter title : </label>
                <ValidationProvider mode="passive" name="Title" rules="required" v-slot="{ errors }">
                <input v-model="query" class="form-control mr-sm-2 " type="search" placeholder="Search"
                       aria-label="Search">
                    <button class="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
                    <span class="text-danger ml-2 h6 font-weight-bold    ">{{ errors[0] }}</span>
                </ValidationProvider>
            </form>
        </nav>
        </ValidationObserver>
        <div class="d-flex">

            <table v-show="isShow" class="table table-primary table-bordered justify-content-center">

                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">POSTER</th>
                    <th scope="col">NAME</th>
                    <th scope="col">YEAR</th>
                    <th scope="col">İMDb</th>
                    <th scope="col">TYPE</th>
                    <th scope="col"></th>

                </tr>
                </thead>
                <tbody>
                <tr >
                    <th scope="row">1</th>
                    <td><img :src="result.Poster" class="h-50 w-75" alt=""></td>
                    <td>{{result.Title}}</td>
                    <td>{{result.Year}}</td>
                    <td>{{result.imdbRating}}</td>
                    <td>{{result.Type}}</td>
                    <td class="m-auto">
                        <button class="btn btn-outline-success w-100"
                                @click="sendFavoriteList"
                                type="submit">Add Favorite
                        </button>
                    </td>
                </tr>
                </tbody>
            </table>



        </div>
    </div>

</template>

<script>
    import axios from "axios";

    export default {
        name: "searchForm",
        data() {
            return {
                query: '',
                isShow: false,
                result: [],
                error : ''

            }
        },
        methods: {
            search() {
                axios
                    .get(`http://www.omdbapi.com/?t=${this.query}&apikey=d1be01a0`)
                    .then((response) => {
                        this.result = response.data
                    });
                this.isShow = true;
                this.query = '';
            },
            sendFavoriteList() {
                this.$store.dispatch('addFavoriteList', this.result);
            },


        },
    }
</script>

<style scoped>

</style>