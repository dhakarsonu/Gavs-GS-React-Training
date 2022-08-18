import React,{useDeferredValue,useSearchQuery} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {UPDATE_NAME} from '../reducer/AppReducer';
import AppContext from './Common/appContext';
import SearchText from './searchText';

const AppHeader = React.memo((props) => {
    const [status,setStatus] = React.useState(false);
    const [isPending,startTransition] = React.useTransition();
    const [start, setStart] = React.useState(false);
    const [counter,setCounter] = React.useState(1);
    const dispatch = useDispatch();
    const appName = useSelector(state => state.AppReducer.name);
    const context = React.useContext(AppContext);
    const inputRef = React.useRef();
    const [query,setQuery] = React.useState('');
    const deferredQuery = useDeferredValue(query,{
        timeoutMs: 5000
    });
    const id = React.useId();
    
    React.useEffect(() => {
        if(!status){
            console.log("Initiate Training");
            setStatus(true);
            return;
        }
        console.log("Turn Off Training");
    },[status]);

    const startClickHander = () =>{
        startTransition(() => {
            setStart(!start);
        });
        dispatch(UPDATE_NAME({
            name: `Gavs-GS - ${inputRef.current.value}`
        }));
        context.updateName({name : `Gavs-GS - ${inputRef.current.value}`});
        setCounter(counter + 1);
        context.setName("Application Header");
    };

    const searchText = React.useMemo(() =>
        <SearchText query={deferredQuery} />,
        [deferredQuery]
    );

    const inputKeyUpHandler = (event) =>{
        // setQuery(inputRef.current.value);
        setQuery(event.target.value);
    }

    return (
        <header id={id} className="App-header">
            {context.name1} -> {appName} {start ? "ON" : "OFF"} {context.name}
            <button onClick={startClickHander}>{start ? "Stop" : "Start"}</button>
            {
                isPending ? "Loading" : <input ref={inputRef} onKeyUp={inputKeyUpHandler} defaultValue={deferredQuery}/>
            }
            
            {searchText}
        </header>
    );
});
  
export default AppHeader;