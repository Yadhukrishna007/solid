export PaymentRegisty{

    private readonly strategies = new Map();

constructor( card:CardPaymentStrategy,
     upi:CardPaymentStrategy, crypto:CryptoPaymentStrategy
){
    this.strategies.set("CARD",this.card)
    this.strategies.set("UPI",this.upi)
    this.strategies.set("CRYPTO",this.crypto)
}



getStrategies(method:string){
    return this.strategies.get(method.toUpperCase())
}

}