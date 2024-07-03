<template>
    <div class="row">
        <div class="col-4">
            <div class="list-group">
                <router-link to="/newpage/a" class="list-group-item list-group-item-action">ComponentA</router-link>
                <router-link to="/newpage/b" class="list-group-item list-group-item-action">ComponentB</router-link>
                <router-link to="/newpage/namedView/a2b" class="list-group-item list-group-item-action">命名視圖 A2B</router-link>
                <router-link to="/newpage/namedView/c2a" class="list-group-item list-group-item-action">命名視圖 C2A</router-link>
                <router-link to="/newpage/dynamicRouter/:id" class="list-group-item list-group-item-action">動態路由</router-link>
                <router-link to="/newpage/dynamicRouterByProps/:id" class="list-group-item list-group-item-action">動態路由 by props</router-link>
                <router-link to="/newpage/navigationRouter" class="list-group-item list-group-item-action">路由方法</router-link>
            </div>
        </div>
        <div class="col-8">
            <router-view></router-view>
        </div>
    </div>
</template>
