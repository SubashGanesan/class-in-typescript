class dog {
    name;
    color;
    ispet;
    isguard;
    count;

    constructor(dogname) {
        this.name = dogname;
        this.count = 0;
        document.getElementById("note").innerHTML = `Play with ${this.name}`;
    }

    func() {
        if (this.count == 0) {
            document.getElementById("note").innerHTML = `${this.name} is Sitting`;
            document.getElementById("icon").innerHTML = "";
            (() => {
                let img1 = document.createElement("img");
                img1.setAttribute("src", "./dog-sit.svg");
                img1.setAttribute("height", "100px");
                document.getElementById("icon").appendChild(img1);
                document.getElementById("butt").innerHTML = "Make him Run";
            })();
            this.count++;
        } else if (this.count == 1) {
            
            document.getElementById("note").innerHTML = `${this.name} is running`;
            document.getElementById("icon").innerHTML = "";
            (() => {
                let img2 = document.createElement("img");
                img2.setAttribute("src", "./dog-running.svg");
                img2.setAttribute("height", "100px");
                document.getElementById("icon").appendChild(img2);
                document.getElementById("butt").innerHTML = "Feed Him";
            })();
            this.count++;
        } else if (this.count == 2) {
            document.getElementById("note").innerHTML = `${this.name} is eating`;
            document.getElementById("icon").innerHTML = "";
            (() => {
                let img3 = document.createElement("img");
                img3.setAttribute("src", "./dog-eating.svg");
                img3.setAttribute("height", "100px");
                document.getElementById("icon").appendChild(img3);
                document.getElementById("butt").innerHTML = "Make him roll";
            })();
            this.count++;
        }
        else if (this.count == 3) {
            document.getElementById("note").innerHTML = `${this.name} is Rolling`;
            document.getElementById("icon").innerHTML = "";
            (() => {
                let img4 = document.createElement("img");
                img4.setAttribute("src", "./dog-sleeping.svg");
                img4.setAttribute("height", "100px");
                document.getElementById("icon").appendChild(img4);
                document.getElementById("butt").innerHTML = "Make him Sit";
            })();
            this.count = 0;
        }
        
        console.log(this.count);
    }

}

let dogplay = new dog("Hachi");


