for (const prop in statistics) {
    if ( (prop.startsWith('r')) || (statistics[prop] % 2 == 1)) {
        console.log(statistics[prop])
    }
}
