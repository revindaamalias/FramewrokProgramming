// ... the starter code you pasted ...
const e = React.createElement;

function LikeButton(){
    // display a "like" <button>
    return e(
        'button',
        {
            onClick: () => alert('success')
        },
        'Like'
    );
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);