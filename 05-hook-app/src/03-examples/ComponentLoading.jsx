export const ComponentLoading = (Loading) =>{
    if(Loading) return(
        < div className="alert alert-info text-center">
                        Loading...
                      </div>  
    );

    return(
        <blockquote className="blockquote text-end">
                            <p className="mb-2">{quote}</p>
                            <footer className="blockquote-footer">{author}</footer>
                        </blockquote> 
    );
}