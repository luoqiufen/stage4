// 发送请求获取数据
import $ from 'jquery';

// 获取某个分类的小说列表
function getNovelList(id) {
    return new Promise((resolve, reject) => {
        let url = `/list/${id}_1.html`;
        $.ajax({
            // url: 'http://localhost:4000/getdata',
            // data: { url: url },
            url:url,
            success(result) {
                let $dom = $(result);
                let $items = $dom.find('.item');
                let data = [];
                $items.each((idx, val) => {
                    let path = $(val).find('a').attr('href');
                    let img = $(val).find('img').attr('src');
                    let name = $(val).find('img').attr('alt');
                    let author = $(val).find('span').html();
                    let desc = $(val).find('dd').html();
                    data.push({
                        path, img, name, author, desc
                    })
                })
                resolve(data);
            },
            error(err){
                reject(err);
            }
        })
    })
}

// 获取某个小说的章节列表
function getChapter(path){
    path = path.substring(22);
    return new Promise(resolve => {
        $.ajax({
            // url:'http://localhost:4000/getdata',
            // data:{url:path},
            url:path,
            success(result){
                let $dds = $(result).find('#list dd');
                let chapters = []
                $dds.each((idx,val) => {
                    let $a = $(val).find('a');
                    let url = path+$a.attr('href');
                    let title = $a.attr('title');
                    chapters.push({
                        url,title
                    })
                })
                resolve(chapters)
            }
        })
    })
}

// 获取小说某个章节的内容
function getContent(path){
    console.log(path)
    return new Promise(resolve => {
        $.ajax({
            // url:'http://localhost:4000/getdata',
            // data:{url:path},
            url:path,
            success(result){
                let con = $(result).find('#content').html();
                resolve(con)
            }
        })
    })
}

export default {
    getNovelList,
    getChapter,
    getContent
}