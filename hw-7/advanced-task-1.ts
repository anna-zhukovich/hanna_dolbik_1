function palindrome(a: string) {
    a = a.toLowerCase()
    return a === a.split('').reverse().join('')
  }

  console.log(palindrome('tnhjg'));