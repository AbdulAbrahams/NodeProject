<template>
    <div class="loading">
        <div class="lds-hourglass">
        </div>
        <div class="text">
            {{ text }}
        </div>
    </div>
</template>
<script>
export default {
    props: {
        text: {
            default: "Loading",
            required: false,
            type: String
        },
    },
}
</script>
<style scoped>
.loading {
    position: fixed;
    top: 40%;
    width: 25%;
    margin: auto;
    background-color: white;
    box-shadow: 0px, 9px -2px black;
    z-index: 999;
    left: 0px;
    right: 0px;
    text-align: center;
    padding: 1.5rem;
}
.lds-hourglass {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
}
.lds-hourglass:after {
    content: " ";
    display: block;
    border-radius: 50%;
    width: 0;
    height: 0;
    margin: 8px;
    box-sizing: border-box;
    border: 32px solid blue;
    border-color: black transparent red transparent;
    animation: lds-hourglass 1.2s infinite;
}
@keyframes lds-hourglass {
    0% {
        transform: rotate(0);
        animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    50% {
        transform: rotate(900deg);
        animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    100% {
        transform: rotate(1800deg);
    }
}</style>