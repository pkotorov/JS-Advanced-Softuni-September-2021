class Story {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this.comments = [];
        this._likes = [];
    }

    get likes() {
        if (this._likes.length === 0) {
            return `${this.title} has 0 likes`;
        } else if (this._likes.length === 1) {
            return `${this._likes[0]} likes this story!`
        }

        return `${this._likes[0]} and ${this._likes.slice(1).length} others like this story!`;
    }

    like(username) {
        if (this._likes.includes(username)) {
            throw new Error('You can\'t like the same story twice!');
        }

        if (username === this.creator) {
            throw new Error('You can\'t like your own story!');
        }

        this._likes.push(username);

        return `${username} liked ${this.title}!`;
    }

    dislike(username) {
        if (!this._likes.includes(username)) {
            throw new Error('You can\'t dislike this story!');
        }

        this._likes = this._likes.filter(x => x !== username);

        return `${username} disliked ${this.title}`;
    }

    comment(username, content, id) {
        // let curretComment = this.comments.find(x => x.id === id);

        // if (curretComment === undefined || id === undefined) {
        //     let comment = {
        //         id: this.comments.length + 1, 
        //         content,
        //         username,
        //         replies: []
        //     };

        //     this.comments.push(comment);

        //     return `${username} commented on ${this.title}`;
        // } else {
        //     let reply = {
        //         id: Number(`${curretComment.id}.${curretComment.replies.length + 1}`),
        //         username,
        //         content
        //     };

        //     curretComment.replies.push(reply);

        //     return 'You replied successfully';
        // }

        let comment = {
            id: id,
            username: username,
            content: content,
            replies: [],
        };
 
        let commentWithId = this.comments.find(c => c.id === id);
 
        if (commentWithId) {
            let replyID = Number(commentWithId.id + '.' + (commentWithId.replies.length + 1));
            let reply = {
                id: replyID,
                username: username,
                content: content,
            };
 
            commentWithId.replies.push(reply);
 
            return 'You replied successfully';
        }
 
        comment.id = this.comments.length + 1;
        this.comments.push(comment);
 
        return `${username} commented on ${this.title}`;
    }

    // toString(sortingType) {
    //     let result = [];
    //     result.push(`Title: ${this.title}`);
    //     result.push(`Creator: ${this.creator}`);
    //     result.push(`Likes: ${this._likes.length}`);
    //     result.push('Comments:');

    //     if (this.comments.length !== 0) {
    //         switch(sortingType){ 
    //             case 'asc':
    //                 this.comments.sort((a, b) => a.id - b.id);

    //                 for (const comment of this.comments) {
    //                     result.push(`-- ${comment.id}. ${comment.username}: ${comment.content}`);
    //                     if (comment.replies.length !== 0) {
    //                         comment.replies.sort((a, b) => a.id - b.id);
    //                         for (const reply of comment.replies) {
    //                             result.push(`--- ${reply.id}. ${reply.username}: ${reply.content}`);
    //                         }
    //                     }
    //                 }
    //             break;
    //             case 'desc':
    //                 this.comments.sort((a, b) => b.id - a.id);

    //                 for (const comment of this.comments) {
    //                     result.push(`-- ${comment.id}. ${comment.username}: ${comment.content}`);
    //                     if (comment.replies.length !== 0) {
    //                         comment.replies.sort((a, b) => b.id - a.id);
    //                         for (const reply of comment.replies) {
    //                             result.push(`--- ${reply.id}. ${reply.username}: ${reply.content}`);
    //                         }
    //                     }
    //                 }
    //             break;
    //             case 'username':
    //                 this.comments.sort((a, b) => a.username.localeCompare(b.username));

    //                 for (const comment of this.comments) {
    //                     result.push(`-- ${comment.id}. ${comment.username}: ${comment.content}`);
    //                     if (comment.replies.length !== 0) {
    //                         comment.replies.sort((a, b) => a.username.localeCompare(b.username));
    //                         for (const reply of comment.replies) {
    //                             result.push(`--- ${reply.id}. ${reply.username}: ${reply.content}`);
    //                         }
    //                     }
    //                 }
    //             break;
    //         }

            
    //     }

    //     return result.join('\n');
    // }

    toString(sortingType) {
        let result = [];
        result.push(`Title: ${this.title}`);
        result.push(`Creator: ${this.creator}`);
        result.push(`Likes: ${this._likes.length}`);
        result.push('Comments:');
 
        if (this.comments.length > 0) {
            let sortedComments = this._sortCriteria(this.comments, sortingType);
            result.push(this._sortThem(sortedComments, sortingType));
        }
      return result.join('\n');
    }
 
    _sortCriteria(commentsOrReplies, criteria) {
        let copyCommentsOrReplies = commentsOrReplies.slice();
        let sortedCommentsOrReplies = null;
 
        if (criteria === 'asc') {
            sortedCommentsOrReplies = copyCommentsOrReplies.sort((a, b) => a.id - b.id);
        } else if (criteria === 'desc') {
            sortedCommentsOrReplies = copyCommentsOrReplies.sort((a, b) => b.id - a.id);
        } else if (criteria === 'username') {
            sortedCommentsOrReplies = copyCommentsOrReplies.sort((a, b) => a.username.localeCompare(b.username));
        }
 
 
        return sortedCommentsOrReplies;
    }
 
    _sortThem(sortedComments, criteria) {
        let commentAndReplies = [];
 
        for (let comment of sortedComments) {
            commentAndReplies.push(`-- ${comment.id}. ${comment.username}: ${comment.content}`);
 
            if (comment.replies.length > 0) {
                let sortedReplies = this._sortCriteria(comment.replies, criteria);
                sortedReplies.forEach(r => commentAndReplies.push(`--- ${r.id}. ${r.username}: ${r.content}`));
            }
        }
 
        return commentAndReplies.join('\n');
    }
}


let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));




