export class PubSub{

    constructor(){
   
    this.suscriptors = new Map()
   
    }
   
    suscribe(chanel,cb){
   
    let _suscriptors = this.suscriptors.get(chanel)
   
    if(_suscriptors){
   
    _suscriptors.push(cb)
   
    }else{
   
    _suscriptors=[cb]
   
    this.suscriptors.set(chanel,_suscriptors)
   
    }
   
    return ()=>{
   
    let indexOf = _suscriptors.indexOf(cb);
   
    _suscriptors.splice(indexOf,1)
   
    }
   
    }
   
    pub(chanel,data){
   
    const _suscriptors = this.suscriptors.get(chanel)
   
    if(_suscriptors){
   
    _suscriptors.forEach(s=>s(data))
   
    }
   
    }
   
   
    }

export default new PubSub();