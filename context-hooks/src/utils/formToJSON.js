export const formToJSON = elements =>
  [].reduce.call(
    elements,
    (data, element) => {
      if (element.name !== "") {
        data[element.name] = element.value;
      }

      return data;
    },
    {}
  );
