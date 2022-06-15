<template>
    <main>
        <div class="left">
            <h4>Hors d'oeuvres</h4>
            <ul>
               <li v-for="(item, i) in data.plates" :key="i">
                    <MenuItemBlackVue :name="item.title" :price="item.price" :description="'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'"></MenuItemBlackVue>
               </li> 
            </ul>
        </div>
        <div class="middle">
            <div class="overlay"></div>
            <h4>Main Course</h4>
            <ul>
               <li v-for="(item, i) in data.mainPlates" :key="i">
                    <MenuItemWhiteVue :name="item.title" :price="item.price" :description="'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'"></MenuItemWhiteVue>
               </li> 
            </ul>
        </div>
        <div class="right">
            <h4>Desserts</h4>
            <ul>
               <li v-for="(item, i) in data.desserts" :key="i">
                    <MenuItemBlackVue :name="item.title" :price="item.price" :description="'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'"></MenuItemBlackVue>
               </li> 
            </ul>
        </div>
    </main>
</template>

<script>
import data from '../../assets/shared/data.js'
import MenuItemBlackVue from '../Atoms/menuItemBlack.vue'
import MenuItemWhiteVue from '../Atoms/menuItemWhite.vue'


export default {
    name: "sixthTile",
    data() {
        return {
            data
        }
    },
    components: { MenuItemBlackVue, MenuItemWhiteVue }
}
</script>

<style scoped lang="scss">
@import '../../../src/assets/style/global-parts/mixins';
main{
    margin-top: 30px;
    h4{
        @include title($primary);
        font-size: 1.5rem;
        margin-bottom: 30px;
    }
    display: flex;
    .left, .middle, .right{
        @include containerXS;
        padding: 40px 30px;
    }
    .left, .right{
        background-color: #e8e8e8;
    }
    .middle{
        position: relative;
        top: -30px;
        left: 0;
        background-image: url(../../../public/img/misc22x.jpg);
        background-size: cover;
        .overlay{
            z-index: 1;
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            background: linear-gradient(180deg, rgba(0,0,0,1) 10%, rgba(212,219,219,0) 100%);
        }
        h4, h5, ul, li{
            color: ($secondary);
            z-index: 2;
        }
    }
    ul{
        list-style: none;
        display: flex;
        flex-flow: column nowrap;
        gap: 30px;
    }
}
</style>