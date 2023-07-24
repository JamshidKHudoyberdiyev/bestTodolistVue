<template>
    <div class="container">
        <div class="info">
            <h2>Siz bu TODOLIST orqali kunlik vazifalaringizni: </h2>
            <ul>
                <li style="color: black;">
                    Kiritishingiz
                </li>
                <li style="color: green;">
                    O'zgartirishingiz
                </li>
                <li style="color: red;">
                    O'chirishingiz mumkin
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.container {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    ul {
        padding-top: 10px;
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        flex-direction: column;

    }
}

@media only screen and (max-width:768px) {
    h2 {
        font-size: 20px;
        text-align: center;
    }

    ul {
        li {
            font-size: 14px;
        }
    }
}
</style>