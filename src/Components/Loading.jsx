import loadingGif from '../images/loading.gif';
export default function Loading(){
    return(
        <div className="loading">
                <img src={loadingGif} alt="Loading..." />
        </div>
    )
}