<script setup>

</script>

<template>
    <div class="add--interconnection">
        <header>
            <button onclick="history.back()" class="back--btn">
                <img class="w-1"
                    src="https://besnik-space.fra1.cdn.digitaloceanspaces.com/ezytor/theme/DG5NWwnlVwzeZtRGptHz1672642971.png"
                    alt="icon" />
            </button>
            <h3>Add Interconnection</h3>
        </header>
        <article>

        </article>
    </div>

</template>

<style scoped lang="scss">
.add--interconnection{
    max-width: 1200px;
    background: #f5f5f5;
    height: auto;
    padding:17px;
    margin: 0 auto;
    header{
        padding:25px;
        background: #fff;
        width:100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap:8px;
        h3{
            font-size: 18px;
            line-height: 26px;
            color:#191919
        }
        .back--btn{
            width:36px;
            height:36px;
            border-radius: 50%;
            background: #f5f5f5;
            border:none;
        }
    }
}
</style>
