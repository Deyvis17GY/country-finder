const DATE_UNITS = {
  day: 86400,
  hour: 3600,
  minute: 60,
  second: 1
}

// function to difference two dates
const getSecondsDiff = (timestamp) => (Date.now() - timestamp) / 1000

const getUniAndValueData = (secondsElapsed) => {
  const entries = Object.entries(DATE_UNITS)
  for (const [unit, secondsInUnit] of entries) {
    const match = secondsElapsed >= secondsInUnit || unit === "second"

    if (match) {
      const value = Math.floor(secondsElapsed / secondsInUnit) * -1
      return {
        value,
        unit
      }
    }
  }
}

const timeAgo = (timestamp, locale) => {
  const rtf = new Intl.RelativeTimeFormat(locale)

  const secondsElapsed = getSecondsDiff(timestamp)
  const { value, unit } = getUniAndValueData(secondsElapsed)

  return rtf.format(value, unit)
}

console.log(timeAgo(new Date(Date.now() - 6400), "es"))

const valor = 0

console.debug(Boolean(valor))
