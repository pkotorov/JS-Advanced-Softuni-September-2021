function foo (data, crit) {
    class Ticket {
        constructor (d, p, s) {
            this.destination = d
            this.price = p
            this.status = s
        }
    }

    return data.slice().map(x => x.split('|'))
               .map(([d, p, s]) => new Ticket(d, Number(p), s))
               .sort((a, b) => {
                   return typeof a[crit] === 'number'
                       ? a[crit] - b[crit]
                       : a[crit].localeCompare(b[crit])
               })
}