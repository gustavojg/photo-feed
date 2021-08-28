const posts = require("./posts")
// @ponicode
describe("posts.requestPosts", () => {
    test("0", () => {
        let callFunction = () => {
            posts.requestPosts("https://croplands.org/app/a/reset?token=", "DROP TABLE tmp;")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            posts.requestPosts("http://www.croplands.org/account/confirm?t=", "DELETE FROM Projects WHERE pid = %s")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            posts.requestPosts("https://api.telegram.org/bot", "DROP TABLE tmp;")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            posts.requestPosts("https://croplands.org/app/a/confirm?t=", "DROP TABLE tmp;")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            posts.requestPosts("http://www.example.com/route/123?foo=bar", "SELECT * FROM Movies WHERE Title=’Jurassic Park’ AND Director='Steven Spielberg';")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            posts.requestPosts(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("posts.actionRepost", () => {
    test("0", () => {
        let callFunction = () => {
            posts.actionRepost(987650)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            posts.actionRepost(12)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            posts.actionRepost(12345)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            posts.actionRepost("bc23a9d531064583ace8f67dad60f6bb")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            posts.actionRepost(56784)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            posts.actionRepost(Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("posts.likePost", () => {
    test("0", () => {
        let callFunction = () => {
            posts.likePost("bc23a9d531064583ace8f67dad60f6bb")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            posts.likePost(12345)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            posts.likePost(987650)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            posts.likePost(12)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            posts.likePost(56784)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            posts.likePost(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("posts.loadPosts", () => {
    test("0", () => {
        let callFunction = () => {
            posts.loadPosts("http://www.croplands.org/account/confirm?t=", { length: 2 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            posts.loadPosts("www.google.com", { length: 5 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            posts.loadPosts("https://", { length: 3 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            posts.loadPosts("http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", { length: 10 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            posts.loadPosts("http://www.croplands.org/account/confirm?t=", { length: 5 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            posts.loadPosts(undefined, { length: NaN })
        }
    
        expect(callFunction).not.toThrow()
    })
})
