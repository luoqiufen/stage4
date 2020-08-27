<template>
    <div>
        <div v-for="(item,idx) in list" :key="idx">
            <h3>{{ item.title }}</h3>
            <ul>
                <li v-for="(val,i) in item.list" :key="i">
                    <a :href="val.url" :class='{"hot-tag":val.hot}'>{{val.name}}</a>
                </li>
            </ul>
            <hr v-if="!item.last" class="true">
        </div>
    </div>
</template>

<script>
export default {
    name:"productList",
    props:{
        list:{
            type:Object,
            default(){
                return {};
            }
        }
    }
}
</script>