<script setup>
import dropDown from "./dropDown.vue";
import InputFeild from "./inputFeild.vue";



</script>

<template>
    <div class="add--interconnection">
        <header>
            <button onclick="history.back()" class="back--btn">
                <div class="arrow-right"></div>
            </button>
            <h3>Add Interconnection</h3>
        </header>
        <article>
            <p class="article--header__text">Setup Types</p>
            <div class="setup--type_toggler">
                <div>
                    <input type="radio">
                    <span>Buyer</span>
                </div>
                <div>
                    <input type="radio">
                    <span>Supplier</span>
                </div>
            </div>
            <div class="service--form_area">
                <div class="form--options">
                    <dropDown />
                    <dropDown />
                    <dropDown />
                    <dropDown />
                    <dropDown />
                    <dropDown />
                    <dropDown />
                    <dropDown />
                    <InputFeild/>

                </div>

                <div>
                    <button >
                        Submit
                    </button>
                </div>
            </div>

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
    margin-top:100px;
    header{
        padding:25px;
        background: #fff;
        width:100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap:8px;
        border-radius: 9px;
        box-shadow: 1px 2px 5px -3px rgb(0 0 0 / 49%);
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
            display:flex;
            justify-content: center;
            align-items: center;
        }
    }
    article{
        padding:25px;
        margin-top:30px;
        background: #fff;
        border-radius: 9px;
        box-shadow: 0px 1px 5px -3px rgb(0 0 0 / 49%);
        .article--header__text{
            font-size: 14px;
            line-height: 14px;
            color:#747474;
            font-weight: 600;
        }
        .setup--type_toggler{
            margin:12px 0 20px 0;
            display: flex;

            display:flex;
            justify-content: flex-start;
            gap:12px;
            div{
                display:flex;
            justify-content: flex-start;
            gap:6px;
            }
        }
       .service--form_area {
            max-width: 80%;
            div{
                button{
                    padding:8px 14px;
                    background: #e9e3e3;
                    cursor:pointer;
                    border-radius: 3px;
                    border:none;
                    font-size: 18px;
                    line-height: 30px;
                    color:#5a5a5a;
                    &:hover {
                        background: #ddd5d5;
                    }
                }
            }
            .form--options{
                display: flex;
                flex-wrap: wrap;
                gap:50px;
            }
       }
    }
}

.arrow-right {
    width: 0;
  height: 0;
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;

  border-right:6px solid rgb(33, 33, 36);
}
</style>
