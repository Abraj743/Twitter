import {helper} from './dummy-helper.js'

export default execute = () => {
    const result = helper();
    if(result){
        return "Learning JS";
    }
    else{
        return "Learning React.js"
    }
}

