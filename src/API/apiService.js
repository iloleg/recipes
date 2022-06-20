import axios from "axios";


export default class ApiService {
    static async getAll(limit = 5, offset = 1) {
        try {
            const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=${limit}&offset=${offset}`)


            return response

        } catch (e) {
            console.log(e)
        }

    }

    static async getPopular(limit = 5, offset = 1) {
        try {
            const response = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=${limit}&offset=${offset}`)


            return response

        } catch (e) {
            console.log(e)
        }


    }

    static async getDetails(params = "") {

        try {
            const response = await axios.get(`https://api.spoonacular.com/recipes/${params}/information?apiKey=${process.env.REACT_APP_API_KEY}`)

            return response

        } catch (e) {
            console.log("ER", e)

        }


    }
    static async getSearch(params = "") {


        try {
            const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${params}`)

            return response

        } catch (e) {
            console.log("ER", e)

        }


    }
}