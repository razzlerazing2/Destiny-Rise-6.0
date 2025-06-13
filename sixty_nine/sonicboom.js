function aboutblank() {
            var win = window.open('about:blank');
            var url = 'Index.html';
            var iframe = win.document.createElement('iframe');
            iframe.style = "position:fixed;width:100vw;height:100vh;top:0px;left:0px;right:0px;bottom:0px;z-index:2147483647;background-color:white;border:none;";
            iframe.src = url;
            win.document.body.appendChild(iframe);
        }