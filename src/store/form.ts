import { defineStore } from "pinia";
import { ref } from "vue";


export const useFormStore = defineStore('form', () => {
    const subscription = ref<string>('monthly');
    const selectedPage = ref<number>(1);
    const formName = ref<string>('');
    const formEmail = ref<string>('');
    const formNumber = ref<number>();
    const extraOptions = ref<string[]>([]);

    const nextPage = () => {
      selectedPage.value = selectedPage.value + 1;
    }

    const previousPage = () => {
      selectedPage.value = selectedPage.value - 1;
    }

    return {
      subscription,
      selectedPage,
      formName,
      formEmail,
      formNumber,
      extraOptions,
      nextPage,
      previousPage
    };
});
