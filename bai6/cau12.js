const myFriends = [1, 2, "Nam", "Hùng", 3, 4, "Hòa", 6, "Long"];
let listFriendName = [];
myFriends.forEach((item)=>{
    if (typeof item == "string"){
        listFriendName.push(item);
    }
})
console.log(listFriendName);