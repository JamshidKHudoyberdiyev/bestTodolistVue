<template>
    <header>
        <div class="container">
            <div class="nav_logo">
                <h2>Vue TODO</h2>
            </div>
            <ul>
                <li>
                    <RouterLink to="/">Home</RouterLink>
                </li>
                <li>
                    <RouterLink to="/about">About</RouterLink>
                </li>
            </ul>
        </div>
    </header>
</template>

<script setup>

</script>

<style lang="scss" scoped>
header {
    height: 80px;
    line-height: 80px;
    background-color: rgb(245, 241, 241);

    .container {
        display: flex;
        align-items: center;
        justify-content: space-between;

        h2 {
            font-weight: 900;
            color: rgba(110, 248, 4, 0.966);
        }

        ul {
            display: flex;
            gap: 20px;
            list-style: none;
        }
    }

}

.router-link-exact-active {
    color: red;
}

a {
    text-decoration: none;
}

@media only screen and (max-width:768px) {
    .container {
        padding: 0 20px;
    }

    h2 {
        font-size: 20px;
    }

    a {
        font-size: 14px;
    }
}
</style>