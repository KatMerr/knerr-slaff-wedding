export default {
    numberBetween: function(min, max){
        return Math.floor(Math.random() * (max - min) + min)
    },
    upperLimit: function(max){
        return Math.floor(Math.random() * max)
    },
}