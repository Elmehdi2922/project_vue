<template>
                <nav id="sidebar" class="m-0">
                    <div class="sidebar-header">
                        <h3>Administration</h3>
                    </div>
                    <ul class="list-unstyled components">
                        <p>Services :</p>
                        <li class="active">
                            <router-link to="/admin/payments" class="dropdown-toggle">Payment</router-link>
                            <ul class="collapse list-unstyled" id="homeSubmenu">
                                <li>
                                    <a href="#">Home 1</a>
                                </li>
                                <li>
                                    <a href="#">Home 2</a>
                                </li>
                                <li>
                                    <a href="#">Home 3</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false">Products</a>
                            <ul class="collapse list-unstyled" id="pageSubmenu">
                                <li>
                                    <a href="#">Page 1</a>
                                </li>
                                <li>
                                    <a href="#">Page 2</a>
                                </li>
                                <li>
                                    <a href="#">Page 3</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">Users</a>
                        </li>
                        <li>
                            <a href="#">Carts</a>
                        </li>
                    </ul>

                    <ul class="list-unstyled CTAs">
                        <li>
                            <a href="https://bootstrapious.com/tutorial/files/sidebar.zip" class="download">Download source</a>
                        </li>
                        <li>
                            <a href="https://bootstrapious.com/p/bootstrap-sidebar" class="article">Back to article</a>
                        </li>
                    </ul>
                </nav>
</template>
<script>
export default {
  name: "AdminSideBar"
};
</script>
