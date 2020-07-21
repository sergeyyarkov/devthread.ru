const slugify = str => {
  const patterns = {
    rus: /^[0-9а-яё-\s]*$/i,
  }

  const translit = str => {
    if (str.match(patterns.rus)) {
      const ru = {
          а: "a",
          б: "b",
          в: "v",
          г: "g",
          д: "d",
          е: "e",
          ё: "e",
          ж: "j",
          з: "z",
          и: "i",
          к: "k",
          л: "l",
          м: "m",
          н: "n",
          о: "o",
          п: "p",
          р: "r",
          с: "s",
          т: "t",
          у: "u",
          ф: "f",
          х: "h",
          ц: "c",
          ч: "ch",
          ш: "sh",
          щ: "shch",
          ы: "y",
          э: "e",
          ю: "u",
          я: "ya",
        },
        newStr = []

      for (var i = 0; i < str.length; ++i) {
        const candidate = str[i].toLowerCase()

        if (ru[candidate]) {
          newStr.push(ru[candidate])
        }

        if (candidate === "-" || !isNaN(candidate)) {
          newStr.push(candidate)
        }
      }

      return newStr.join("")
    }

    return "not rus"
  }

  if (str.match(patterns.rus)) {
    return translit(str).split(" ").join("-").toLowerCase()
  }

  return str.split(" ").join("-").toLowerCase()
}

export default slugify
