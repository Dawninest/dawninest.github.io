import { ref, isRef, unref, watchEffect } from "vue";

export function useFetch(url: string | any) {
  const data = ref<any | null>(null);
  const error = ref<any | null>(null);

  const doFetch = () => {
    data.value = null;
    error.value = null;

    fetch(unref(url))
      .then((res) => res.json())
      .then((json) => (data.value = json))
      .catch((error) => error.value === error);
  };

  if (isRef(url)) {
    watchEffect(doFetch);
  } else {
    doFetch();
  }

  return { data, error };
}
