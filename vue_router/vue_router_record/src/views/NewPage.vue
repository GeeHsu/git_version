<template>
  <div class="row">
    <div class="col-4">
      <div class="list-group">
        <router-link to="/newpage/a" class="list-group-item list-group-item-action">
          元件 A
        </router-link>
        <router-link to="/newpage/b" class="list-group-item list-group-item-action">
          元件 B
        </router-link>
        <router-link to="/newpage/namedview/c2a" class="list-group-item list-group-item-action">
          命名路由 c2a
        </router-link>
        <router-link to="/newpage/namedview/a2b" class="list-group-item list-group-item-action">
          命名路由 a2b
        </router-link>
        <router-link to="/newpage/dynamicrouter/b9039789d7d5a209"
        class="list-group-item list-group-item-action">
          動態路由($route)
        </router-link>
        <router-link to="/newpage/dynamicrouterbyprops/b9039789d7d5a209"
        class="list-group-item list-group-item-action">
          動態路由(props)
        </router-link>
        <router-link to="/newpage/routerNavigation" class="list-group-item list-group-item-action">
          路由導覽
        </router-link>
      </div>
    </div>
    <div class="col-8">
      <router-view></router-view>
    </div>
  </div>
</template>
