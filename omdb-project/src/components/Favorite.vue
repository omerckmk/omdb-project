<template>
        <div >
            <div class="d-flex align-items-center">
                <label class="text-center h4 ml-2 mr-2">Filter Type : </label>
                    <select v-model="select"  class="form-control w-25 mb-1 font-weight-bold" >
                        <option value="All" selected>All</option>
                        <option value="movie">Movie</option>
                        <option value="series">Series</option>
                        <option value="episode">Episode</option>
                    </select>

            </div>




            <table  class="table table-dark table-bordered ">
                <thead>
                <tr >
                    <th scope="col">#</th>
                    <th scope="col">Poster</th>
                    <th scope="col">Name</th>
                    <th scope="col">Year</th>
                    <th scope="col">İMDb</th>
                    <th scope="col">Type</th>
                    <th scope="col"></th>
                </tr>
                </thead>
                <tbody >
                <tr  v-for="(list , index)  in listShow" :key='list.imdbID' >
                    <th scope="row">{{index+1}}</th>
                    <td class="w-25 ">
                        <img :src="list.Poster" class="h-50 w-75 "  alt="">
                    </td>
                    <td>{{list.Title}}</td>
                    <td>{{list.Year}}</td>
                    <td>{{list.imdbRating}}</td>
                    <td>{{list.Type}}</td>
                    <td><button class="btn btn-outline-success my-2 my-sm-0"
                                @click="$store.dispatch('deleteFavoriteList' ,list.imdbID)"
                                type="submit">Delete Favorite</button></td>
                </tr>
                </tbody>
            </table>
        </div>
</template>

<script>
    export default {
        name: "Favorite.vue",
        data() {
            return {
                favoriteList: [],
                select : 'All'
            }
        },
        created() {
           this.favoriteList = this.$store.getters.getFavoriteList;
        },
        computed : {
            listShow() {
                if (this.select === 'All') {
                    return this.favoriteList
                } else {
                    return this.favoriteList.filter(list => list.Type === this.select)
                }
            }

    }
    }
</script>

<style scoped>
option{
    font-weight: bold;
}
</style>