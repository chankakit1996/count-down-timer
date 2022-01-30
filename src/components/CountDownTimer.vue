<template>
    <div class="container">
        <h1 class="title">This is a Ken Count Down Timer</h1>
        <h2 class="timer-title">2022 Christmas Day</h2>
        <div class="timer-wrapper">
            <div class="date-wrapper day-wrapper">
                <div class="date day">
                    {{ time.days }}
                </div>
                <div class="label">days</div>
            </div>
            <div class="date-wrapper hour-wrapper">
                <div class="date hour">
                    {{ time.hours }}
                </div>
                <div class="label">hours</div>
            </div>
            <div class="date-wrapper minute-wrapper">
                <div class="date minute">{{ time.minutes }}</div>
                <div class="label">mins</div>
            </div>
            <div class="date-wrapper second-wrapper">
                <div class="date second">{{ time.seconds }}</div>
                <div class="label">seconds</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    name: 'CountDownTimer',
    setup() {
        const getTime = () => {
            const christmasDate = new Date('2022-12-25');
            const now = new Date();
            const result = (christmasDate.getTime() - now.getTime()) / 1000; // millisecond

            const seconds = Math.floor(result % 60);
            const minutes = Math.floor(result / 60) % 60;
            const hours = Math.floor(result / 60 / 60) % 24;
            const days = Math.floor(result / 60 / 60 / 24);

            return {
                days,
                hours,
                minutes,
                seconds,
            };
        };
        const time = ref(getTime());
        setInterval(() => {
            time.value = getTime();
        }, 1000);

        return { time };
    },
});
</script>

<style scoped lang="scss">
@media screen and (min-width: 320px) {
    .container {
        width: 100%;
        height: 100vh;
        padding: 10%;
        background: url('@/assets/snow.jpeg') no-repeat;
        background-size: 100% 100%;

        > .timer-wrapper {
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            justify-content: space-between;
            align-content: center;
            gap: 1rem;

            .date {
                font-size: 5rem;
                font-weight: bold;
            }
        }
    }
}

@media screen and (min-width: 768px) {
    .container {
        > .timer-wrapper {
            flex-direction: row;
        }
    }
}
</style>
