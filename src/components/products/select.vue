<template>
    <div class="m-product-select">
        <dl class="tab">
            <dt>
                {{name}}
                <i class="el-icon-caret-bottom" />
            </dt>
            <dd>
                <!-- <dt>{{name}}</dt> -->
                <h4 class="select-title">{{name}}</h4>
                <span v-for="(item,index) in list" :key="index">{{item}}</span>
            </dd>
        </dl>
    </div>
</template>

<script>
export default {
    props:[
        "name",
        "list"
    ]
    
}
</script>
