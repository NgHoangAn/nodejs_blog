# nodejs_blog
# 1. phép so sánh trong JavaScript
    - so sánh nghiêm ngặt
        - sử dụng ba dấu bằng ===
        - Cả kiểu và giá trị phải giống nhau
        - không cho phép ép kiểu dữ liệu  (coercion)
            - ép kiểu tường minh
            - ép kiểu ngầm định
    - So sánh trừu tượng
        - sử dụng Dấu bằng kép
        - là so sánh giá trị bình đẳng và được phép ép kiểu dữ liệu
        - được so sánh sau khi chuyển đổi chúng thành cùng một kiểu dữ liệu
![](1-ep%20kieu%20tuong%20minh.png)
![](2-ep%20kieu%20ngam%20dinh.png)

# 2. Callback function
    - một hàm được thực thi sau khi một hàm khác đã thực thi xong
    -  một hàm được truyền cho một hàm khác như một đối số và được thực thi sau khi một số tác vụ đã hoàn thành
![](3-callback.png)

# 3. Primitive? Các loại?


# 4. && là?
    - tìm giá trị falsy đầu tiên và trả về
    - trả về giá trị cuối nếu không tìm thấy

# 5. || là?
    - tìm giá tị truthy đầu tiên và trả về

# 6. Falsy và truthy
    - Falsy
        0, 0n, undefined, null, NaN, false, ""
    - Truthy
        còn lại

# 7. Undefined và null?
    - Null
        - một giá trị rỗng hoặc không tồn tại
        - là 1 object
    - Undefined
        - một biến đã được khai báo
        - giá trị chưa xác định

# 8. IIFEs?
   - Một Immediately Invoked Function Express  được thực thi ngay sau khi nó được tạo

# 9. anonymous và named function?
    - anonymous
        - một hàm không có tên
        - tất cả đều được tạo trong thời gian chạy ứng dụng

# 10. Ba giai đoạn của sự lan truyền sự kiện
    -  capturing trước sau đó bubbling
        - Trong giai đoạn capturing các sự kiện truyền từ Window qua  DOM tree cho đến khi nó đến nút đích
    - Bubbling ngược lại với giai đoạn capturing
        - các sự kiện nổi bong bóng (buble up) lên cây DOM

# 11. “this” hoạt động?


# 12.Number.MIN_VALUE > 0 ??
    - True
    - Number.MIN_VALUE là 5e-234
    - giá trị nhỏ nhất là Number.NEGATIVE_INFINITY

# 13. Math.max() nhỏ hơn Math.min()?
    - Math.min () trả về infinity và Math.max () trả về -infinity

# 14. Function Expression khác thế nào với Function Declaration
    - Function declaration (khai báo hàm) sử dụng từ khóa function, theo sau là tên của hàm
        - các khai báo hàm được trình thông dịch JavaScript chuyển lên đầu phạm vi của chúng và do đó bạn có thể xác định một khai báo hàm và gọi nó ở bất kỳ đâu
    - Function Expression (biểu thức hàm)  bắt đầu bằng var, let hoặc const, theo sau là tên của hàm và toán tử gán =
        - chỉ có thể gọi một biểu thức hàm theo trình tự tuyến tính: bạn phải xác định nó trước khi gọi nó
    - Function declaration được thực hiện theo cơ chế hoisting, trong khi Function Expression thì không

# 15. Sự khác nhau giữa var, let và const
    - let và var có thể được gán lại (re-assigned) trong khi const thì không
        - const cho phép biến thay đổi (variable mutation), có nghĩa là nếu nó đại diện cho một mảng hoặc một đối tượng, nó có thể thay đổi. Bạn chỉ không thể chỉ định lại chính biến đó
    - let có những lợi thế đáng kể so với var, khiến nó trở thành lựa chọn tốt hơn trong hầu hết, nếu không phải là tất cả các trường hợp mà một biến cần thay đổi

    - các biến được khai báo bằng var luôn được đưa lên đầu phạm vi tương ứng của chúng
    - các biến được khai báo bằng const và let được cũng được đưa lên, nhưng nếu bạn cố gắng truy cập chúng trước khi chúng đã khai báo, bạn sẽ gặp lỗi ‘vùng chết tạm thời’ (temporal dead zone).  Đây là hành vi hữu ích, vì var có thể dễ bị lỗi hơn, chẳng hạn như tình cờ bị gán lại

    - var là phạm vi chức năng (function-scoped), let và const là phạm vi khối (block-scoped)

# 16. xác định một biến mà không có từ khóa?
    - nếu x chưa được xác định, thì x = 1 là viết tắt của window.x = 1
    sử dụng strict mode (use strict):
        - gặp lỗi khi khai bao biến ko có từ khóa:
            - Uncaught SyntaxError: Unexpected indentifier

# 17. event delegation?
    - sử dụng để phản hồi các sự kiện (event) của người dùng thông qua một node cha thay vì mỗi node con

# 18. Hoisting ?
    - di chuyển mọi khai báo lên đầu mọi phạm vi
    - co thể sử dụng 1 iến trươc khi nó được khai báo
    - var được lưu trữ, let-const thì không
    - khởi tạo (initializations) không được hoisting,
    cac decleration là theo cơ chế

# 19. Prototype chain?
    - trong js là kế thừa nguyên mẫu
        - truy cập thuộc tính của 1 đối tượng
            - tìm trong đối tượng
            - tìm kiếm trong nguyên mẫu của đối tượng
            - ...cho đến khi tìm thấy
    - mọi thứ đều được kế thừa từ Object

# 20. DOM?
    - là 1 API liên kết các p/tử tài liệu HTML và XML -(node)- thành 1 cấu trúc cây
    - chứa thông tin về các mối quan hệ cha-con giữa các nút
        - node là các đối tượng co thể thao tác:
            - styles
            - contentt
            - placement changes

# 21. Mảng
kiểm tra là mảng?
hợp nhất 2 mảng?
    dùng concat()
        arr1.concat(arr2)
    dùng ES6
        [...arr1,...arr2]

làm trống mảng
    arr = []
    arr.length = 0
    arr.splice(0,arr.length)

# 22. Object
tạo Object?
    obj literals
        const obj = {...};
    new keyword
        function Obj(props){
            this.props = props;
        }
        const obj = new Obj('okL')
    Object.create()
        function newObj(props){
            this.props = props;
        }
        const obj = Object.create(newObj)
    Object.assign()
        const obj = {...};
        const copy = Object.assign({}, obj);

sao chép các d/tượng trong js?
    shallow clone: giữ lại tham chiếu
    deep clone: tạo tham chiếu mới

# 23. bind/call/apply
    bind(): gọi hàm với ngữ cảnh nhât định
            không gọi hàm, chỉ sữa ngữ cảnh
    call() và apply(): gọi hàm ngay lập tức và sửa đổi ngữ cảnh
        call(): accept 1 danh sách các g/trị làm đối số
        apply(): accept 1 mảng làm đối số
    dùng bind khi sửa ngữ cảnh và gọi hàm sau này
    dủng call và apply khi sữa ngữ cảnh và gọi hàm ngay lập tức

# 24. AJAX?
    cách hoạt động:
        sự kiện xảy ra-->request lên server-->reponse về web-->xử lý bằng js
    ưu:
        cập nhật trang mà ko tải lại trang
        yêu cầu và nhận dữ liệu từ máy chủ sau khi tải xong
        gửi dữ liệu đến máy chủ ở background
    nhược:
        không hoạt động khi Js bị disabled
    
# 25. Promise?
    trạng thái
        Pending: chờ xử lý
        fulfilled: hoàn thành
        rejected: từ chối
    ưu:
        có thể kêt hợp
        có thể dễ dàng thực thi mã với Promise.all khi nhiều phản hồi được trả về
        có thể đợi một kết quả từ các lời hứa đồng thời đang chờ xử lý với sự trợ giúp của Promise.race
        có thể viết mã không đồng bộ một cách đồng bộ nếu bạn sử dụng nó kết hợp với async / await
    nhược điểm
        chỉ có thể hoạt động trên một giá trị duy nhất tại một thời điểm
        không có sẵn trong trình duyệt cũ hơn, chúng phải được làm đầy
        chậm hơn so với việc sử dụng lệnh gọi lại, điều này có thể dẫn đến các vấn đề về hiệu suất có thể xảy ra

# 26. map và forEach()
    forEach thay đổi các mục gốc trong mảng
    map trả về một mảng đã biến đổi trong khi vẫn giữ nguyên bản gốc
# 222222.
typeof?
NaN?
palindrome?
    là một từ hoặc một cụm từ mà khi ta đọc xuôi hoặc đọc ngược thì nó cũng như nhau

https://viblo.asia/p/co-che-bat-dong-bo-trong-javascript-jvElaO1zKkw

for-in
    lặp qua tất cả các thuộc tính của đối tượng theo cách thức từng bước

xử lý ngoại lệ
    dùng try...catch

web storage?
    lưu trữ cặp khóa-giá trị
    local storage: lưu trữ dữ liệu cho client mà không có ngày hết hạn
    session storage: chỉ lưu trữ dữ liệu cho một phiên. Dữ liệu sẽ biến mất khi trình duyệt bị đóng

Higher Order Function?
    - Bất kỳ hàm nào nhận một hàm khác làm đối số được gọi là hàm bậc cao hơn
    - Phương thức map giúp truyền một hàm để chuyển đổi từng mục trong một mảng
    - Filter nhận một tập hợp dữ liệu và bạn có thể chuyển một hàm có điều kiện trả về một tập hợp con của tập hợp
    - Reduce: nhận 2 đối số(accumulator và item)

class?
    là khuôn mẫu để tạo các đối tượng
    được xây dựng trên các nguyên mẫu
    kế thừa p/thức và thuộc tính từ các lớp khác dùng extends

Currying?
    có nghĩa là biến đổi một hàm có n đối số, thành n hàm của một hoặc ít đối số
    Currying không thay đổi hành vi của một hàm. Nó chỉ thay đổi cách nó được gọi

Phương thức PreventDefault ()
    dùng để hủy bỏ một phương thức
    ngăn không cho sự kiện thực hiện hành vi mặc định

BOM?
    cho phép JavaScript “nói chuyện với” trình duyệt. Nó bao gồm các đối tượng điều hướng, lịch sử, màn hình, vị trí và tài liệu là con của cửa sổ. Browser Object Model không được chuẩn hóa và có thể thay đổi dựa trên các trình duyệt khác nhau

# 1. khác nhau giữa undefined và not defined
    https://stackoverflow.com/questions/20822022/whats-the-difference-between-variable-definition-and-declaration-in-javascript

# 4. closure
    
=======================================================
# 1. biến
    var,let,const
    cách phân biệt:
    khi nào dùng
    var hoisting
===================================
html
    Element
    Attributes
    blocks & inline
    class & Id
    Layout
    Semantic elements
    file paths
css
    inline, block, inline-block
    flexbox & grid
    box model
    position
    phan biet cac don vi
    css selection
    pseudo class
    responsive
js
    dom
        - truy xuất và thao tác trên tài liệu có dạng html or xml
        - cấu trúc
            document node: thẻ <html>
            element node: 1 p/tử html
            text node: bên trong 1 thẻ html dều là node text
            attribute node: href
        - quan hệ
            document node luôn là node đầu
            tât cả các node đều có 1 node cha(trừ document node)
            1 node có thể có 1 hoặc nhiều con
            node có cùng cha là node siblings
            node đầu firstChild - node cuối lastChild
        - dom trong js
            document 
            element: truy xuất thông qua class, id, nanme
            event: gán onclick(), onload() vào cac thẻ html
            listener: lắng nghe sự kiện tác động lên thẻ html
            Navigation:
            node, nodelist
        - thao tác với dom
            thuộc tính:
                id
                className
                tagName
                innerHTML: return về mã HTML bên trong p/tử hiện tại(bao gồm element node và text node)
                outerHTML: return về tagName + innerHTML
                attributes:
                style:
                value:
            p/thức:
                getElementById
                getElementByTagName
                getElementByName
                getAttribute
                setAttribute
                appendChild: thêm node con vào node hiện tại
                removeChild
            
    var,let,const

    promise,callback
        callback
            cho 1 hàm là tham sô của hàm khác, tham số(fn) được lưu lại và sẻ thực thi khi co kết quả(dữ liệu tả về or lỗi khi thao tác)
            callback hell là callback lồng trong callback
        promises
            khởi tạo new Promise với fn với 2 tham số resolve và reject
            đặt code bât đồng bộ trong fn Promise
                resolve khi mọi thứ xảy ra như mong muốn
                reject khi không
            resolve chạy thì code trong .then thực thi. reject chạy khi .catch được trigger
            mỗi .then nên trả về 1 promise
            chỉ có 1 .catch để xử lý toàn bộ error(khi có lỗi thì promise chain ngừng và nhảy vào .catch)
            không thể truy xuất biên được truyền or khai báo trong promise chain ngoài phạm vi promise
            phải co ít nhất 1 .catch ở cuối promise để băt lỗi(nếu ko thì bất kỳ lỗi nào xảy ra đều sẻ bị bỏ qua)
    async,await
        async: thông báo fn sẽ xử lý bất đồng bộ
        await: báo chúng ta muốn đợi kq của thao tác bất đồng bộ trong 1 fn có đánh dấu async.

    cookies, session, local storage
        local storage:
            lưu trữ vô thời hạn: (xóa bằng: js, bộ nhớ trình duyệt, localStorage API)
            5MB
            không gửi thông tin lên server
            sử dụng:
                khởi tạo
                    localStorage.setItem('key','value')
                    localStorage.key = value
                    localStorage['key'] = 'value'
                lấy:
                    localStorage.getItem('key')
                    localStorage.key
                xóa:
                    localStorage.removeItem(key);
                    localStorage.clear()
        Session Storage
            lưu trên Client:giông localStorage
            mất khi đống tab
            ko gửi lên server
            <5MB
        Cookie
            gửi lên server
            (truyền từ server tới browser, được lưu trên máy khi truy cập vào ứng dụng)
            dùng chủ yếu đọc phía máy chủ
            có thời gian sống (custom)
            4KB và vài chục cookie cho 1 domain
            cach tạo:
                document.cookie = 'username=Ted Mosby; expires=Thu, 18 Dec 2018 8:00:00 UTC';
                document.cookie = 'username=Ted Mosby; max-age=9000'; //giây
            
    hoisting
        di chuyển tất cả cac biến và hàm khi khai báo lên đầu scope trước khi thực thi
        fn declarations(bắt đầu là fn operator sau đo gán cho 1 cái tên) co hoisting
        fn expression(tạo 1 variable sau gán với 1 anonymous fn) thì ko
    api
        https://hocjavascript.net/tong-quan/api-la-gi/
    string
        split(): cắt chuỗi cho vào array theo d/kiện trong ()
        reverse(): là split xong rồi đảo ngược thứ tự trong array
        join():nối các element trong array lại với nhau theo d/kiện
        - word counter
        - slice(indexStart, indexEnd): cắt chuỗi
        - Representation of NUmber
        
    array
        array-like-object
            - kế thừa từ object
            - ko có các method của array: forEach,push,map,filter,slice
            - convert to Array
                - .from() // Array.from(arrayLike)
                - for..of //
                - spread operator // [...arrayLike]
                - Object.values // arr = Object.values(arrayLike)
                - Object.keys
            - có thể dùng call() để gọi array method đồi với array-like-object
        reduce: 
        map:
        filter
        sort: sắp xếp trên mãng đã cho
            default là theo unicode point
            custom:
                anphabet,length,number sort,even-odd
        every
        some
        có thể destructuring
        remove duplicate element
            dùng filter
            dùng Set
        spread/rest
        find
        split
        shift/pop/splice
        join
        ...
    fn
        scope
        currying
        
    object
        - .assign: clone Object

    classes
    context
    setter, getter
    data attributes
    json
    ajax
    BOM
    strict mode
    template literals
    web sockets

    es6
    node package manager
=============================================================
============================HTML=============================
=============================================================
=============================================================
=============================CSS=============================
=============================================================
# Selector
# bg
    background-image: url()
    background-repeat:  no-reapeat
                        repeat
                        repeat-x
                        repate-y
    background-position: position1 position2
        ko lặp và hiển thị ở vị trí nào đó
        pos1,pos2: top bot left center right
    background-attachment: value
        đứng im khi scroll
        value: fixed    // đứng im
                scroll // di chuyển theo khi kéo
    ghi tắt
# color
    hsl(hue, saturation,lightness)
    rgba
    hsla
# text
    text-transform
    text-align: value
        vị trí text
        value: center left right justify
    text-decoration:
# float
    left
    right
    none
    khi dùng float thì phần nối tiếp với thẻ chứa thẻ float sẻ bị thẻ float đè lên()-> dùng overflow:hidden trong thẻ cha chừa float
# display
    inline
        hien thi tren cung 1 hang va chieu rong phu thuoc vao nd  ben trong thẻ
        span,a,strong,b,i,...
        ko dung được margin:top/bottom 
    block
        chiếm 1 khối
        chiều rộng = 100%

    inline-block: dạng khối nằm trên 1 hàng
    none
# margin-padding
    margin: tao k/cach giua 2 the html
    padding: tao k/cach giua the html va noi dung cua no
    box-model:
        padding-margin-border
# position
    static: mặc định
    relative: định vị tuyệt đối, các thẻ html bên ngoài coi nó là cha
    absolute: định vị tương đối theo thẻ cha or thẻ body nếu ko có khai báo
    fixed: định vị tương đối cho cửa sổ Bowser của trình duyệt
    inherit: thừa hưởng các thuộc tính từ t/phần cha
    - relativev là khung - absolute là con có thể di chuyển bên trong khung đến bất kỳ vị trí nào kể cả ngoài khung.
# menu dọc
# menu fixed
# z-index
    chỉ được gán cho thẻ có khai báo position:absolute
    2 thẻ có cùng z-index: thẻ nằm dưới thi2  hiển thị phía trên, con nằm trên cha
# clearfix
    điều chỉnh vùng ko gian của thẻ cha so với thẻ con có dùng float(dùng float thì chiều cao của thẻ cha là 0px so với thẻ con float đó - chiều cao của thẻ cha sẻ được tăng lên khi nội dung bên trong nó ko sử dụng float)
    dùng clear:both vào after
# after - before
    after: thêm nội dung vào sau thẻ html
    before: thêm nội dung vào trước thẻ html
    nội dung thẹm bằng after - before ko dùng chuột bôi đen hay copy được
# combinators
    descendant selector(space): chọn tất cả những thẻ con nằm trong 1 selector
    child selector(>): chọn tất cả những thẻ con của 1 selector nào đó
    Adjacent sibling(+): chọn tất cả những thẻ anh/chị/em rout65 nằm liền kề ngay sau 1 selector
    General sibling(~)
# overflow
# Pseudo- classes
# Pseudo- elements
# Specificity
Responsive
Paeallax
=============================================================
==========================JAVASCRIPT=========================
=============================================================
# Function
# setTimeout - setInterval
# Loop
# String
# Array
# Event
# DOM
# BOM
# Object
# Hoisting
# Adventure

=============================================================
==========================REACT==============================
=============================================================
# ES6
    -variable
        var:
            scope là global(trừ khi khai bao trong fn thì là fn scope)
            có tinh hoisting: biến sẻ được đưa lên đầu scope trươc khi thực hiện( giá trị là undefined)
        let:
            scoppe là block
            cho phep cập nhật giá trị của biến, ko cho tái khai báo lại biến
            có tinh hoisting: (gia trị là Reference Error)
        const:
            scope là block
            có hoisting (gia trị là Reference Error)
            đôi với kiểu là primitive(string, number, boolean,null,undefined) thì ko thể tái tạo biến hay cập nhật
            đôi vơi kiểu là reference(object, array, fn) co thể cập nhật giá trị
    - default parameter
    - Spread  
        lặp lại các p/tử của mãng or object
    -  rest
    - destructuring
    - arrow fn
    - classes
    - import & export

# virtual DOM
    - xây dựng dựa trên DOM thật
    - khi render 1 jsx element ->cập nhật virtual DOM(kiểm tra sựu thay đổi với virtual DOM trươc đó =>cập nhật)-> cập nhật DOM thật
    - tại sao dùng?
        - khi 1 nodes thay đổi thì cac nodes cũng thay đổi trên DOM thật -> chậm khi xây dựng ứng dụng lớn.

# jsx
        là js XML: cho phép viết mã html trong React
        gán 1 biểu thức trong jsx = cách bọc nó trong {}
        là 1 biểu thức:
            sau khi complie => các đoạn mã jsx sẽ như các object thông thường
        phần tử con trong jsx
            nếu chỉ co 1 tag thì đóng = />
            co nhiều ptu73 con => bọc bằng jsx tag(<div></div>)
![](html convert jsx.png)

# components
        - bên trong return luôn tồn tại tag bao ngoài tất cả
        - dùng React.DOM để render 1 component
        - phải có cấu trúc XML <Ten> or <Ten></Ten>
        - chia nhỏ các thành phần trong UI thành nhiều component
        - class component
            cách viết:
                class ... extends Component {
                    render(){
                        return(
                            ...
                        )
                    }
                }
                export default ...;
            thoải mái dùng state, props, lifecycles
        - fn component
            cách viết:
                const ... = fn(props){
                    return(
                        ....
                    )
                }
                export default ...;
            ko có khái niệm state, life cycles, events (khi dùng Hooks mới có)

# props, *state
    - props là tham số
    - khi 1 component cha truyền cho component con 1 props -> component con chỉ có thể đọc và ko có uyền chỉnh sửa no bên phía component cha
    - truyền props:
        - truyền 1 g/trị bên trong 1 tags thì nó có thuộc tính chirlden trong object props
        - vi dụ :
            const app = () => <Welcome name="Huy" age=18>hello</Welcome>
    - bên trong component : giá trị là 1 object
        {
            name: "Huy",
            age: 18,
            children:"hello"
        }
    - nhận props:
        class component: dùng this.props
        fn component: chỉ định tham số trong fn
    - props validation
        kiểm soát vấn đề của props, kiểm tra đầu vào của props trước khi component được render.
        dùng propTypes
            fn component
                fnComponent.propTypes = {
                    ....//
                }
            class component
                clComponent.propTypes = {
                    ...//
                }
            or dùng:
                static propTypes = {
                    ...//
                }
    - xử lý data truyền vào cho 1 component
    - xử lý data giữa các component
    - xử lý data khi các component lồng vào nhau
    - xử lý đk khi render(login/logout)
    - xử lý array/object -> html list
    =====================================
    - state là 1 object lưu trữ giá trị của các thuộc tính bên trong component, scope là component đó, giá trị của 1 state thay đổi-> component render lại.
            khởi tạo:
                dùng this.state = {name:"Huy"};
            lấy g/trị
                gọi this.state
                    this.state.name// log "Huy"
            nên khởi tạo state trong hàm contructor(hàm chạy đầu tiên khi component được gọi)
            cập nhật state
                dùng this.setState({
                    name: "HuyRua"
                })

    component API
        setState()
            cập nhật g/trị của state, tham số truyền vào của API là giá trị của state muốn update
                this.setState({
                    ....//
                })
            or là 1 fn callback gồm tham số: state trước, props có trong component
                this.setState((prevState, props) =>{
                    return newState;
                })
        forceUpdate()
            re-render mà ko cần bất cứ sự thay đổi nào của state
            this.forceUpdate
        findDOMNode()
        bind()

# lifecycle
        khi render 1 component thì react thực hiện nhiều tiến trình #
        các giai đoạn
            Initialization
                khởi tạo state và props(thường trong constructor)
            Mounting
                thực hiện sau khi khởi tạo hoàn thành
                nv: chuyển virtual DOM thành DOM và hiển thị
                component render đầu tiên, có 2 p/thức:
                    componentWillMount():
                        chạy khi component chuẩn bị được mount(trước khi render)-> component được mount
                    componentDidMount():
                        gọi sau khi đã mount, xảy ra sau khi componentWillMount thực hiện xong.
                        có thể gọi API, thay đổi state, props
                    Updating
                        giai đoạn 3
                        data của props&state sẽ được update -> đáp ứng event của user -> re-render component
                        các p/thức:
                            shouldComponentUpdate:
                                xác định component có nên được render(default-> return true)
                                nhận vào 2 tham số : nextState, nextProps
                            componentWillUpdate:
                                gọi trước khi tiến hành re-render
                                action: update state, props trước khi re-render
                                nhận vào 2 tham số : nextState, nextProps
                            componentDidUpdate:
                                gọi khi component đã re-render xong
            unmounting
                bước cuối
                tiến hành unmountDOM
                    componentWillUnmount:

# handling events
        các event viết trong {}
        dùng preventDefault(): chặn các hành động mặc định

# xử lý form
    tạo state chứa giá trị của input trong hàm constructor
    bắt sự kiện onchange
    vd form
# render với điều kiện
    gan element vào biến
    biểu thức điều kiện torng jsx
    ngăn chặn component render
# List and Key
    lists: 
        khởi tạo giống js
        const list = ['a','b','c'];
    keys:
        là duy nhất khi ss với anh/chị của nó trong lists chứa chúng
        tránh lấy index làm key(sắp xếp mảng thì index thay đổi-> xác định lại key 1 lần nữa-> giảm hiệu xuất làm việc)
            dùng index làm key khi
                là list tĩnh, ko thay đổi
                ko sắp xếp lại
                ko được lọc
                ko có id cho mục trong list
# Lifting State Up
    khi 1 component thay đổi(re-render) thì các component quan hệ phía trên nó phải nhận được sự thay đổi(cha/con)
# Refs
    tham chiếu 1 element trong DOM or từ con -> cha(đọc- chỉnh sửa element)
    vd....
        refs(cây cầu) khi 1 element gán vào 1 refs -> cho phép sửa đổi, truy cập vào element đó ngay lập tức (ko cần dùng đến props hay state để component re-render)
    cách dùng:
        khởi tạo: thường trong constructor(class component) hay biến(fn component) -> gán vào 1 element trong hàm render()
            ....
            constructor(props){
                ...
                this.myRefs = React.createRef();
            }
            render(){
                return(
                    ....
                    ref = {this.myRefs}
                )
            }
            //khởi tạo 1 ref(dùng React.createRef()) -> gán g/trị vào thuôc tính myRef trong class/fn component -> gán refs vào element input(element có thể được truy cập/sửa thông qua ref)
        uses:
            ...
            handleClick = () => {
                ...
                this.myRef.current.focus();
                ....
            }
            //curent: chứa g/trị element được tham chiếu khi element đó được render -> focus vào input(ko dùng đến state or props->ko re-render)
    Forwarding Refs:
        chuyển 1 ref từ 1 component tới component con, cho phép component cha tham chiếu tới các element của component con để đọc/chỉnh sửa
        - cách dùng:
            bao component con trong React.forwardRef()
# Context
    chia sẻ dữ liệu tới các component trong cây mà ko cần truyền dữ liệu qua props theo từng cấp bậc
    khởi tạo:
        const MyContext = React.createContext(defaultValue)
            //defaultValue = g/trị của props value trong provider
            //context object
        mỗi context object phải đi kèm 1 provider(nhận về sự thay đổi của context)
        <MyContext.Provider value={}>
        <MyContext.Consumer>
            //khởi chạy khi giá trị context thay đổi -> nhận về g/trị của context đó
        .displayName
            // hiển thị trong devTools
        .contextType: được tạo bởi .createContext -> lấy g/trị của context
    cách dùng:
        - khởi tạo(.createContext) -> nhận 1 object các thuộc tính: provider, consumer
        - dùng provider bọc quanh component, truyền g/trị vào props value
        - thêm consumer ở bên trong provider để chia sẻ context(lấy g/trị thông qua props.chirlden)
        vd
# Fragments
    bao bọc các element jsx -> triển khai element theo mong muốn
    cach viết:
        React.Fragment key={}//chỉ định key vào fragment(triển khai lists..)
        <></>
# Render props
    - tái sử dụng code
    - thực hiện -> truyền vào component 1 props có value như là 1 fn
    - vấn đề:   
# higher other component
    là 1 fn nhận vào 1 component và trả về 1 component
# redux

# Hook
    cho phép sử dụng state, life cycle trong fn component
    - useState():làm việc với state trong fn component mà ko chuyển về class component
        const [tenState. hamCapnhatState] = useState(giaTriBanDauCuaState)
        cach dùng:
            import vào useState from 'react'
        - co thể lưu bất kì kiểu dữ kiệu nào trong state: object,number,string,...(ko giống như class component chỉ lưu trong object)
        - 
    useEffect(): chạy khi g/trị của 1 biến nào đó thay đổi or component được render (thay thế life cucle trong class component)
        useEffect(fnDuocKhoiChay, arrChuaCacGiaTriThayDoi)
        - là componentDidMount, componentDidUpdate, componentWillUnmount kết hợp lại
        - sử dụng useEffect như componentDidMount
            - useEffect(effectFn, [])
            - dùng để gọi API khi component được render
        - sử dụng useEffect như componentDidUpdate
            - useEffect(effectFn)
        - sử dụng useEffect như componentUnWillMount
            - chỉ cần return về 1 fn trong effectFn, fn được return đóng vai trò như componentUnWillMount
    - useContext(): nhận về g/trị của context mỗi khi nó thay đổi
        const gtriContext = useContext(tenContext);

    - useReducer(): xử lý chia sẻ state giữa các component
        const [state, dispatch] = useReducer(reducer, initArg, init)
    - Custom Hook
# Router
    react-router-dom
 
=============================================================
==========================THUẬT TOÁN=========================
=============================================================
# Linear Search
    - tìm kiếm p/tử cho trước trong 1 danh sách = duyệt lần lượt từng p/tử của danh sách -> tìm được or hết
    - cách:
        băt đầu duyệt từ đầu đến cuối mảng với x
        p/tử  đang duyệt = x thì return vị trí
        ko tìm thấy or hết -> return -1
        độ phức tạp là O(1) -> O(n) 
# Binary Search
    - tìm kiếm vị trí trongn mảng đã sắp xếp
    - chia khoảng tìm kiếm thành 1/2 -> ss x với giá trị ở giữa
        - nếu g/trị nhỏ hơn g/trị ở giữa thì tìm bên trái, ngược lại
         
# Interpolation Search

# Bubble Sort
# Insertion Sort
# Selection Sort
# Merge Sort
# Quick Sort

===============TODAY===================
# Interpolation Search
# Bubble Sort
# Insertion Sort
# Selection Sort
# Merge Sort
# Quick Sort
#hook
#redux

=============================================================
==========================JAVASCRIPT=========================
=============================================================
# http protocol*
# SSR & CSR
    - server side rendering
        mã html/css được render ở đây
        tối ưu SEO
        lần truy cập đầu tiên nhanh hơn
    - client side rendering
        mã html/css được render ở đây

    cách nhận biết:
        response trả về html/css là ssr
# Express & start web server
    tạo procject:
        npm init
        npm i express

    nodemon & debug:
    add git repository
        git init
        git add . 
        git commit -m
        git push 
    morgan:
    template engine
        handlebars
    static files &scss
        scss
            watch: input output
        static file
    use bootstrap
    basic routing
        set routing random
        syntax
            req, response
        GET method
            xảy ra khi truy cập vào web
            request đến server ==> phân biệt dựa vào route
            - truyền dưới dạng query parameter trên thanh url
            - khi lấy ra dữ liệu bên phía server thì .query.(tên cái cần lấy)
        form default behavior
            khi submit form tra ve theo method: GET, POST,...
            action mặc định là tại form
                có thể setups action trả kết quả request về trang khác khi submit form
        POST method
            - truyền dưới dạng form data(ẩn dưới thanh url)
            - khi cần lấy ra bên phía server thì .body.(cái gì đó)
            - .body trong server chưa được lưu g/trị của form data gửi về:
                vì thành phần ở giữa browser và controller là 1 middleware
                g/trị body nhận được bên phía server là undefined
    MVC
        ưu điểm: bóc tách các thành phần riêng biệt
        Model       : phần tương tác với data (mysql mongodb)
        View        : chửa file view(html,css)
        Controllers : phần trung gian giữa model và view
                        browser -> web server -> router -> dispatch(controller) ->
                        model -> controller -> view -> controller -> web server(response, http protocol) -> browser
    Routes & Controllers
        web server: có khi chạy npm start( node file js)
                    express cấu hình sẵn web server rồi nên chỉ cần gọi app...
                    sau khi chạy thì các require/import đã được nạp vào RAM
        Routes  : sau khi có request từ client gửi về -> trỏ vào file js -> tìm kiếm route hợp lệ
        dispatcher:   action(hợp lệ) -> dispatcher -> function handle
        browser (send req)-> web server -> router -> dispatcher -> Controllers -> ................
        quy ước tạo file:
    prettier
        làm đẹp code
        prettier --single-quote --trailing-comma all --tab-width 4 --write src/**/*.{js,json,scss}
    lint-staged
        chạy những file được add vào git 
    husky
    
    Model
        mongoose

    App
        - home
        - detail
    CRUD
        soft delete

            




























