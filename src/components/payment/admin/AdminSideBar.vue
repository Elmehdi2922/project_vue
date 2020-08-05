<template>
                <nav id="sidebar" class="m-0">
                    <div class="sidebar-header">
                        <h3>Administration</h3>
                    </div>
                    <ul class="list-unstyled components">
                        <p>Services :</p>
                        <li class="service">
                            <router-link to="/admin/payments">Payment</router-link>
                        </li>
                        <li>
                            <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false">Products</a>
                        </li>
                        <li>
                            <a href="#">Users</a>
                        </li>
                        <li>
                            <a href="#">Carts</a>
                        </li>
                    </ul>
                </nav>
</template>
<script>
export default {
  name: "AdminSideBar"
};
</script>
<style>
.service a.router-link-active{
    background: #6D7FCC;
    background-color: #6D7FCC
}
</style>
