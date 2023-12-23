import { defineStore } from "pinia";
import { ref } from "vue";


export const useFormStore = defineStore('form', () => {
    const subscription = ref<string>('monthly');
    const selectedPage = ref<number>(1);
    const formName = ref<string>('');
    const formEmail = ref<string>('');
    const formNumber = ref<number>();
    const extraOptions = ref<string[]>([]);

    const subscriptionValues = {
      monthly: {
        label: 'monthly',
        price: 9,
        discount: '2 months free',
      },
      yearly: {
        label: 'yearly',
        price: 90,
        discount: '2 months free',
      },
    };

    const extraOptionsValues = {
      label: {
        onlineService: "online-service",
        largerStorage: "larger-storage",
        customProfile: "custom-profile"
      },
      month: {
        onlineService: {
          price: 1,
        },
        largerStorage: {
          price: 2,
        },
        customProfile: {
          price: 2,
        },
      },
      year: {
        onlineService: {
          price: 10,
        },
        largerStorage: {
          price: 20,
        },
        customProfile: {
          price: 20,
        },
      }
    }

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
      subscriptionValues,
      extraOptionsValues,
      nextPage,
      previousPage
    };
});
