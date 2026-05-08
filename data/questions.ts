export interface Question {
  id: number;
  question: string;
  options: [string, string, string, string];
  answer: number;
  explanation?: string;
}

export const questions: Question[] = [
  {
    id: 11,
    question: "Bạn là founder của một startup. Sau 3 vòng gọi vốn, bạn nắm dưới 15% cổ phần, hệ quả nguy hiểm nhất là....",
    options: ["A. Không còn động lực phát triển công ty", "B. Không kiểm soát được chiến lược sản phẩm", "C. Không có quyền phủ quyết các quyết định M&A", "D. Không đủ quyền bảo vệ nhà đầu tư cũ"],
    answer: 2
  },
  {
    id: 12,
    question: "Thước đo nào cho thấy một startup đang vận hành bền vững, dù chưa có lãi?",
    options: ["A. Burn multiple <1", "B. EBITDA margin >10%", "C. LTV/CAC >1", "D. Monthly recurring revenue (MRR) tăng 20%"],
    answer: 0
  },
  {
    id: 13,
    question: "Bạn có 500 triệu VND cần tiêu trong 4 đợt, mỗi đợt cách nhau 3 tháng. Giải pháp nào giúp bạn tối ưu lãi và thanh khoản?",
    options: ["A. Gửi toàn bộ kỳ hạn 12 tháng", "B. Gửi không kỳ hạn", "C. Mở 4 sổ tiết kiệm kỳ hạn 3 tháng, đáo hạn lệch nhau 3 tháng", "D. Gửi 1 sổ 6 tháng, sau đó chia tiếp khi đáo hạn"],
    answer: 2
  },
  {
    id: 14,
    question: "Từ ngày 1/7/2025, theo nghị định 94/2025/ND-CP, người vay tiền qua các ứng dụng bắt buộc phải..",
    options: ["A. Có bảo lãnh vay vốn", "B. Được kiểm tra thông tin tín dụng qua CIC", "C. Có tổng thu nhập tối thiểu 10 triệu đồng/ tháng", "D. Tất cả các phương án trên"],
    answer: 1
  },
  {
    id: 15,
    question: "Bạn vay 40 triệu đồng mua xe máy, lãi xuất 12%/ năm tính trên dư nợ giảm dần, trả góp đều trong 12 tháng. Tổng số tiền phải trả là khoảng...",
    options: ["A. 0 VND, bạn bùng nợ", "B. 50,3 triệu VND", "C. 56,3 triệu VND", "D. 42,6 triệu VND"],
    answer: 3
  },
  {
    id: 16,
    question: "Phương pháp trả nợ cá nhân Snowball tạo hiệu ứng tâm lí tích cực nhờ yếu tố nào?",
    options: ["A. Giảm tổng lãi", "B. Trả nợ nhỏ trước", "C. Không cần thanh toán", "D. Lãi gộp thấp"],
    answer: 1
  },
  {
    id: 17,
    question: "Công việc freelance chạy quảng cáo của bạn thu nhập 150 triệu VND/ năm. Để hợp pháp và tối ưu thuế, bạn nên....",
    options: ["A. Không khai báo gì, vì chưa tới mức đóng thuế", "B. Đăng kí hộ kinh doanh và đóng thuế khoán", "C. Mở công ty trách nhiệm hữu hạn để khấu trừ chi phí", "D. Đăng kí cá nhân kinh doanh và tự khai thuế thu nhập cá nhân từng lần"],
    answer: 1
  },
  {
    id: 18,
    question: "Khi đầu tư vào căn hộ đang xây (off-plan), rủi ro thường gặp là gì?",
    options: ["A. Khó bán lại vì giá tăng quá nhanh", "B. Không vay được ngân hàng", "C. Bị trì hoãn bàn giao, chậm pháp lý", "D. Không được miễn thuế đất"],
    answer: 2
  },
  {
    id: 19,
    question: "Hệ số P/B (Price-to-Book) thấp trong định giá cổ phiếu của 1 doanh nghiệp bất động sản thường cho thấy điều gì?",
    options: ["A. Doanh nghiệp đang bị định giá quá cao", "B. Doanh nghiệp đang có khoản lỗ lớn", "C. Doanh nghiệp có giá thị trường thấp hơn giá trị sổ sách", "D. Doanh nghiệp có phong thủy không tốt"],
    answer: 2
  },
  {
    id: 20,
    question: "Ngân hàng Nhà nước VN khuyến khích tài chính xanh như thế nào?",
    options: ["A. Cấp bù lãi cho các khoản vay xanh", "B. Hỗ trợ ngân hàng thương mại huy động trái phiếu xanh trong nước theo ICMA", "C. Yêu cầu các ngân hàng thương mại phát triển và ứng dụng các sản phẩm, dịch vụ ngân hàng xanh", "D. Cung cấp bảo lãnh tín dụng cho các dự án xanh"],
    answer: 0
  },
  {
    id: 21,
    question: "Tổng thu nhập tháng này là 15 triệu VND, bạn chi: 7 triệu cho ăn uống, nhà ở, đi lại; 7 triệu đi du lịch; 1 triệu cho tiết kiệm. Bạn có nên điều chỉnh kế hoạch tài chính cá nhân?",
    options: ["A. Có, bạn không cần tiết kiệm", "B. Có, bạn đang chi tiêu quá nhiều vào du lịch", "C. Không, chi tiêu tháng này chỉ là tạm thời...", "D. Không, tháng nào bạn cũng chi tiêu như vậy mà có sao đâu?"],
    answer: 1
  },
  {
    id: 22,
    question: "Theo báo cáo Lương & Thị trường của Navigos (2025), có bao nhiêu phần trăm doanh nghiệp đang tuyển dụng qua các nền tảng số?",
    options: ["A. 12%", "B. 100%", "C. 76%", "D. 51%"],
    answer: 2
  },
  {
    id: 23,
    question: "Với mức thu nhập cá nhân nào sau đây thì bạn bắt đầu phải trả thuế giá trị gia tăng?",
    options: ["A. 1 triệu VND", "B. 10 triệu VND", "C. 100 triệu VND", "D. Mọi mức thu nhập"],
    answer: 3
  },
  {
    id: 24,
    question: "Những “tiêu sản” của bạn KHÔNG bao gồm...",
    options: ["A. Danh mục cổ phiếu của bạn", "B. Laptop phục vụ việc học", "C. Chiếc xe mới mua để đi làm", "D. Tất cả phương án trên"],
    answer: 0
  },
  {
    id: 25,
    question: "Sau 03 năm đầu kể từ khi mua, giá trung bình của chiếc ô tô mới có thể giảm bao nhiêu phần trăm so với giá mua ban đầu?",
    options: ["A. 5%", "B. 10%", "C. 20%", "D. 35%"],
    answer: 3
  },
  {
    id: 26,
    question: "Bạn đổi giấy tờ sở hữu ô tô của mình để lấy 1 khoản tín dụng. Trong quá trình trả nợ, chiếc ô tô được chuyển vào kho của bên cho vay để quản lý. Đây là hình thức...",
    options: ["A. Tín dụng cố chấp", "B. Tín dụng thế chấp", "C. Tín dụng cầm cố", "D. Tín dụng đen"],
    answer: 2
  },
  {
    id: 27,
    question: "Bạn có 1 khoản trả góp với lãi suất thay đổi (ARM). Khi lãi suất chính sách giảm, khoản phải trả của bạn...",
    options: ["A. Giảm tương ứng", "B. Không có gì thay đổi", "C. Tăng tương ứng", "D. Biến mất"],
    answer: 0
  },
  {
    id: 28,
    question: "Bạn chọn mua chứng chỉ tiền gửi ngân hàng với lãi suất 6%/năm thay vì đầu tư vào quỹ ETF với lợi nhuận trung bình 9%/năm. Chi phí cơ hội bạn phải trả là gì?",
    options: ["A. Lợi nhuận tiềm năng 3% bị bỏ lỡ từ quỹ ETF", "B. Phí quản lý của chứng chỉ tiền gửi", "C. Lãi suất cố định 6%/năm", "D. Thời gian nghiên cứu quỹ ETF"],
    answer: 0
  },
  {
    id: 29,
    question: "Bạn tiết kiệm 30 triệu VND/ năm và đầu tư với lãi suất 8%/ năm. Nếu muốn tích lũy 3 tỷ VND để nghỉ hưu sớm, bạn mất bao lâu để đạt được mục tiêu?",
    options: ["A. 29 năm", "B. 50 năm", "C. 37 năm", "D. Chắc cũng phải cả đời"],
    answer: 0
  },
  {
    id: 31,
    question: "Bạn tiết kiệm được 1 tỷ sau 10 năm đều đặn gửi tiết kiệm 6,5 triệu VND/ tháng. Phép màu nào giúp bạn đạt được điều này?",
    options: ["A. Lãi suất kép 7%/ năm", "B. Lãi suất đơn 7%/năm", "C. Lãi suất ưu đãi 7%/ năm", "D. Lãi suất chiết khấu 7%/năm"],
    answer: 0
  },
  {
    id: 32,
    question: "Bạn đang xem xét đầu tư trái phiếu chính phủ. Mức rủi ro của tài sản này là..",
    options: ["A. Rủi ro cao, bạn có thể mất hoàn toàn vốn đầu tư", "B. Rủi ro trung bình, bạn có thể không được hoàn vốn nếu kinh tế khó khăn", "C. Rủi ro cực cao, bạn không nên đầu tư", "D. Rủi ro cực thấp, khả năng bảo toàn vốn của bạn gần như tuyệt đối"],
    answer: 3
  },
  {
    id: 33,
    question: "Bạn “xuống tiền” mua trái phiếu 50 triệu, kỳ hạn 5 năm, lãi đơn 7%/năm. Đến ngày đáo hạn, bạn thu được....",
    options: ["A. 62,5 triệu", "B. 64,5 triệu", "C. 67,6 triệu", "D. 68,5 triệu"],
    answer: 0
  },
  {
    id: 34,
    question: "Theo báo cáo của Quỹ tiền tệ Quốc tế IMF, tầng lớp trung lưu và dân số thành thị ở Việt Nam tăng nhanh dẫn đến...",
    options: ["A. Lưu lượng tiền trong nền kinh tế tăng", "B. Mức tiêu dùng trong nước tăng", "C. Gia tăng tốc độ toàn cầu hóa nền kinh tế", "D. Sự phát triển của các kênh bán lẻ quốc tế"],
    answer: 1
  },
  {
    id: 35,
    question: "Bạn đang chi tiêu định kỳ trong vô thức khi ....",
    options: ["A. Trả phí quản lý thẻ ngân hàng", "B. Mua gói data 5G cho 2 sim nhưng chỉ xài 1", "C. Mua chiếc túi hàng hiệu bạn không thực sự cần", "D. Đóng học phí"],
    answer: 1
  },
  {
    id: 36,
    question: "Bạn sẵn sàng chi trả nhiều hơn cho một sản phẩm vì đã bỏ thời gian lựa chọn, kể cả khi sản phẩm không còn phù hợp, là ví dụ của....",
    options: ["A. Hiệu ứng neo (anchoring)", "B. Tư duy chi phí chìm (sunk cost)", "C. Lệch chuẩn xác nhận (confirmation bias)", "D. Tự định giá tài sản (endowment effect)"],
    answer: 1
  },
  {
    id: 37,
    question: "Bạn vay 5 triệu VND từ ngân hàng với lãi đơn 10% mỗi năm trong 2 năm. Tổng số tiền gốc lãi bạn phải trả là bao nhiêu?",
    options: ["A. 5 triệu VND", "B. 6 triệu VND", "C. 7 triệu VND", "D. 8 triệu VND"],
    answer: 1
  },
  {
    id: 38,
    question: "Bạn có 1 khoản nợ đã quá hạn khoảng 200 ngày. Đây là khoản....",
    options: ["A. Nợ xấu nhóm 3 - Nợ dưới tiêu chuẩn", "B. Nợ xấu nhóm 1 - Nợ đủ tiêu chuẩn", "C. Nợ xấu nhóm 4 - Nợ nghi ngờ", "D. Nợ xấu nhóm 2 - Nợ cần chú ý"],
    answer: 0
  },
  {
    id: 39,
    question: "Ngay cả khi bạn đã tất toán khoản nợ, CIC vẫn lưu trữ lịch sử nợ xấu của bạn trong vòng",
    options: ["A. 1 năm", "B. 1 quý", "C. 5 năm", "D. 10 năm"],
    answer: 2
  },
  {
    id: 41,
    question: "Bạn mua cổ phiếu A với 80.000 VND/ cổ phiếu. Sau đó, giá cổ phiếu giảm xuống còn 70.000VND nhưng bạn nhận được cổ tức 2.000VND/ cổ phiếu. Bạn đã...",
    options: ["A. Lãi 10% khi đầu tư", "B. Lãi 7% khi đầu tư", "C. Lỗ 10% khi đầu tư", "D. Lỗ 7% khi đầu tư"],
    answer: 3
  },
  {
    id: 42,
    question: "Sau khi bán cổ phiếu, bạn thu được 5 triệu VND. Bạn cần nộp thuế...",
    options: ["A. 5.000VND", "B. 50.000VND", "C. 500.000VND", "D. Bạn được miễn thuế trên khoản thu nhập này"],
    answer: 3
  },
  {
    id: 43,
    question: "Trọng tâm của chiến lược phát triển nền kinh tế xanh tại Việt Nam là...",
    options: ["A. Phát triển thị trường tài chính xanh và thị trường các-bon", "B. Chính sách ưu đãi tín dụng cho các dự án năng lượng hóa thạch", "C. Khuyến khích các trang trại hữu cơ", "D. Tất cả các phương án trên"],
    answer: 0
  },
  {
    id: 44,
    question: "Thiên kiến giá trị cảm nhận (Perceived value) là khi....",
    options: ["A. Cùng một món hàng nhưng bạn phải mua với giá cao hơn người khác", "B. Bạn luôn cảm thấy mình không đủ tiền tiêu", "C. Bạn luôn cảm thấy bất an về tài chính cá nhân", "D. Bạn luôn chọn combo rẻ dù vượt nhu cầu tiêu dùng"],
    answer: 0
  },
  {
    id: 45,
    question: "Các nền tảng mua sắm thiết kế các mốc thưởng như “đơn từ 300k được tặng quà”, “tích điểm đổi quà” nhằm...",
    options: ["A. Kéo dài thời gian sử dụng ứng dụng", "B. Kích hoạt tinh thần “phiếu bé ngoan”", "C. Tăng tỷ lệ quay lại mua sắm", "D. Tất cả các phương án trên"],
    answer: 3
  },
  {
    id: 46,
    question: "Lạm phát và thị trường cổ phiếu “là gì của nhau”?",
    options: ["A. Khi lạm phát tăng cao, thị trường cổ phiếu có xu hướng tăng tương ứng", "B. Khi lạm phát tăng cao, thị trường cổ phiếu có xu hướng giảm điểm", "C. Khi lạm phát tăng cao, thị trường cổ phiếu có xu hướng bình ổn", "D. Lạm phát không có mối quan hệ với thị trường cổ phiếu"],
    answer: 1
  },
  {
    id: 47,
    question: "Bạn mua 100.000 VND/ cổ phiếu X. Sau đó giá cổ phiếu giảm còn 80.000VND nhưng bạn nhận được cổ tức 3.000VND/ cổ phiếu. Lợi suất đầu tư của bạn là...",
    options: ["A. 17%", "B. -17%", "C. 10%", "D. -20%"],
    answer: 1
  },
  {
    id: 48,
    question: "200 cổ phiếu A của bạn có tỷ lệ P/E là 15, bạn thu lời 1 triệu VND khi đầu tư. Giá của một cổ phiếu A là...",
    options: ["A. 200.000 VND", "B. 20.000 VND", "C. 75.000 VND", "D. 50.000 VND"],
    answer: 2
  },
  {
    id: 49,
    question: "Sự khác biệt lớn nhất giữa chiến lược DCA (Dollar Cost Averaging) khi đầu tư vào quỹ và khi đầu tư vào cổ phiếu riêng lẻ là gì?",
    options: ["A. DCA vào quỹ ít chi phí hơn", "B. DCA vào quỹ giảm rủi ro hành vi", "C. DCA vào cổ phiếu có NAV ổn định hơn", "D. DCA vào quỹ chỉ áp dụng cho ETF"],
    answer: 1
  },
  {
    id: 50,
    question: "Bạn đang thực tập tại một quỹ đầu tư. Bạn đề xuất kế hoạch truyền thông thu hút giới trẻ bằng nội dung dí dỏm, cam kết lãi 20% tháng nhưng bị sếp từ chối vì...",
    options: ["A. Sếp không có khiếu hài hước", "B. Cách làm này đã cũ, thiếu hiệu quả", "C. Cách làm này không tuân thủ pháp lý", "D. Sếp không thích bạn"],
    answer: 2
  },
  {
    id: 51,
    question: "Theo số liệu của Cục Thống kê Việt Nam (2024), nhóm nghề nào sẽ chiếm tới 40% tổng số việc làm trong tương lai?",
    options: ["A. Nhóm nghề công nghệ cao", "B. Nhóm nghề tài chính", "C. Nhóm nghề giáo dục", "D. Nhóm nghề “xanh”"],
    answer: 3
  },
  {
    id: 52,
    question: "Bạn đầu tư 5% tài sản vào một quỹ ESG, quỹ công bố lợi nhuận năm là 12%, phí quản lý 2%. Lợi nhuận thực nhận là...",
    options: ["A. 10%", "B. 19%", "C. 14%", "D. 8%"],
    answer: 0
  },
  {
    id: 53,
    question: "Theo số liệu báo cáo của Tổ chức Biến đổi khí hậu & Năng lượng, năm 2025 Việt Nam đang dẫn đầu ASEAN về...",
    options: ["A. Ô nhiễm môi trường", "B. Rủi ro biến đổi khí hậu", "C. Quy mô các dự án điện mặt trời, điện gió và thủy điện", "D. Trình độ nhân lực ứng phó với thiên tai"],
    answer: 2
  },
  {
    id: 54,
    question: "Theo Vietnam Holding (2025), cứ 100 người VN thì có 9 người là...",
    options: ["A. Nhà đầu tư mạo hiểm", "B. Chuyên viên tài chính", "C. Nhà đầu tư bất động sản", "D. Nhà đầu tư chứng khoán"],
    answer: 3
  },
  {
    id: 55,
    question: "Bạn có 10 triệu VND, 1 cổ phiếu A giá 10.000 VND. Nếu ký quỹ 50%, bạn mua được tối đa bao nhiêu cổ phiếu A?",
    options: ["A. 5.000", "B. 1.000", "C. 10.000", "D. 2.000"],
    answer: 0
  },
  {
    id: 56,
    question: "Nếu bạn bị nhận lệnh gọi bổ sung ký quỹ (call margin) mà không nộp tiền hay tăng số lượng chứng khoán thế chấp thì...",
    options: ["A. Bạn sẽ bị cấm giao dịch trong 3 năm", "B. Bạn sẽ bị khởi tố hình sự", "C. Công ty chứng khoán sẽ bán giải chấp cổ phiếu bạn", "D. Công ty chứng khoán sẽ gọi bạn cháy máy"],
    answer: 2
  },
  {
    id: 57,
    question: "Trong phân tích cơ bản khi đầu tư chứng khoán, bạn KHÔNG sử dụng chỉ báo nào...",
    options: ["A. ROE", "B. RSI", "C. P/E", "D. EPS"],
    answer: 1
  },
  {
    id: 58,
    question: "Theo báo cáo xu hướng Tiêu dùng tại VN (2025) của Cimigo, các hộ gia đình VN đang..",
    options: ["A. Gia tăng đầu tư tài chính", "B. E ngại đầu tư tài chính", "C. Gia tăng tỷ lệ tiết kiệm", "D. Mở rộng các nguồn thu nhập"],
    answer: 0
  },
  {
    id: 59,
    question: "Bạn có điểm tín dụng cá nhân cao. Khi đó, rủi ro được nợ ....... và khả năng được cho vay .......",
    options: ["A. Cao - Thấp", "B. Thấp - Cao", "C. Cao - Cao", "D. Thấp - Thấp"],
    answer: 1
  },
  {
    id: 61,
    question: "Hợp nhất nợ (Debt Consolidation) giúp được gì cho người vay?",
    options: ["A. Xóa nợ xấu", "B. Cắt giảm số nợ", "C. Gộp và giảm lãi", "D. Chẳng giúp gì, chỉ đổi chỗ đau đầu"],
    answer: 2
  },
  {
    id: 62,
    question: "Ưu điểm chính của phương pháp trả nợ cách tuần (Biweekly) là gì?",
    options: ["A. Dễ tính", "B. Rút ngắn kỳ hạn", "C. Lãi suất thấp", "D. Trả ít hơn mỗi lần"],
    answer: 1
  },
  {
    id: 63,
    question: "Bạn là 1 nhà sáng tạo nội dung bán khóa học Excel. Tệp khách mục tiêu của bạn bão hòa. Cách mở rộng bền vững là gì?",
    options: ["A. Hạ giá liên tục để cạnh tranh", "B. Ra thêm các gói hướng dẫn 1-1", "C. Làm thêm eBook hướng dẫn", "D. Chạy affiliate cho khóa học khác"],
    answer: 1
  },
  {
    id: 64,
    question: "Theo cục thống kê, nhóm hàng hóa dịch vụ nào sau đây chiếm trọng số lớn nhất CPI của VN giai đoạn 2020-2025?",
    options: ["A. Nhà ở, nước, chất đốt", "B. Thuốc và dịch vụ y tế", "C. Hàng ăn và dịch vụ ăn uống", "D. Giáo dục"],
    answer: 2
  },
  {
    id: 65,
    question: "Bạn 25 tuổi, 4 năm kinh nghiệm, lương dưới 12 triệu. Đồng nghiệp mới vào lương đã 15 triệu. Bạn nên làm gì đầu tiên?",
    options: ["A. Xin nghỉ việc ngay", "B. Thương lượng lại lương với sếp", "C. Rà soát kỹ profile và đối chiếu giá thị trường", "D. Làm thêm job ngoài để bù lại"],
    answer: 2
  },
  {
    id: 66,
    question: "Trong mô hình lương thưởng đãi ngộ 3P, năng lực cá nhân của bạn được thể hiện qua...",
    options: ["A. Position", "B. Person", "C. Performance", "D. Potential"],
    answer: 1
  },
  {
    id: 67,
    question: "Bạn vay ngân hàng 200 triệu VND để khởi nghiệp, trả lãi trước, lãi suất 5%/ năm. Lãi suất thực tế của khoản vay là bao nhiêu?",
    options: ["A. 5%/ năm", "B. 5.26%/ năm", "C. 10%/năm", "D. 10.26%/năm"],
    answer: 1
  },
  {
    id: 68,
    question: "Thông thường, trong thời gian ân hạn của khoản vay, bạn sẽ..",
    options: ["A. Không phải trả lãi", "B. Không phải trả nợ gốc", "C. Không phải trả bất kì khoản tiền nào", "D. Được hưởng lãi suất ưu đãi"],
    answer: 1
  },
  {
    id: 69,
    question: "Theo VnEconomy (2025), lĩnh vực khởi nghiệp tại VN đang thu hút nhiều vốn đầu tư nhất là...",
    options: ["A. Thương mại điện tử", "B. Công nghệ viễn thông", "C. Công nghệ tài chính", "D. Công nghệ nông nghiệp và thực phẩm"],
    answer: 2
  },
  {
    id: 70,
    question: "Theo khảo sát của Báo Dân trí (2025), kênh đầu tư chính được nhiều người VN lựa chọn nhất là...",
    options: ["A. Bất động sản", "B. Chứng khoán", "C. Tài sản mã hóa", "D. Vàng"],
    answer: 0
  },
  {
    id: 71,
    question: "Bạn tham gia vào một quỹ đầu tư tại VN. Bạn có thể rút vốn trong trường hợp nào?",
    options: ["A. Khi quỹ hoàn thành một dự án cụ thể", "B. Bất kỳ lúc nào khi thị trường có nhu cầu cao", "C. Khi quỹ niêm yết trên sàn giao dịch chứng khoán", "D. Thời gian quy định trong điều lệ quỹ"],
    answer: 3
  },
  {
    id: 72,
    question: "Tỷ lệ ký quỹ ban đầu do công ty chứng khoán của bạn quy định. Con số này KHÔNG được thấp hơn...",
    options: ["A. 30%", "B. 40%", "C. 50%", "D. 60%"],
    answer: 2
  },
  {
    id: 73,
    question: "Theo Thời báo Ngân Hàng, Tổng giá trị rút từ các quỹ đầu tư trong quý 1/2025 lên tới gần 4.700 tỷ đồng, phản ánh...",
    options: ["A. Năng lực quản lý các quỹ đang sụt giảm", "B. Tâm lý phòng thủ của nhà đầu tư khi thị trường biến động", "C. Kinh tế khó khăn khiến các quỹ giải thể", "D. Nhà đầu tư chuyển dịch dần sang tài sản mã hóa"],
    answer: 1
  },
  {
    id: 74,
    question: "Bạn đầu tư mua 1 chiếc xe ô tô cũ để chạy dịch vụ, thu nhập ổn định. Tuy nhiên xe mất giá 25% sau 2 năm. Nhiều người nói “xe là tiêu sản vì mất giá”. Vậy xe này là gì?",
    options: ["A. Tiêu sản (vì mất giá trị)", "B. Tích sản (vì tạo ra dòng tiền dù mất giá)", "C. Không phải tích sản hay tiêu sản", "D. Tất cả đều sai"],
    answer: 1
  },
  {
    id: 75,
    question: "Bạn mua điện thoại thông minh giảm 30% từ 20.000.000 VND còn 14.000.000 VND trên app, quẹt thẻ tín dụng lãi đơn 3%/tháng, sau 4 tháng mới thanh toán. Phí phạt trễ hạn: 200.000 VND. Tổng chi phí bạn phải trả gần đúng là:",
    options: ["A. 15.500.000 VND", "B. 15.880.000 VND", "C. 14.000.000 VND", "D. 18.000.000 VND"],
    answer: 1
  },
  {
    id: 76,
    question: "Bạn mua khóa học ảo trên mạng giá 5.000.000 VND, không học nhưng tự tin rằng đây là “tích sản tri thức”. Bạn đang thực sự nắm giữ gì?",
    options: ["A. Tiêu sản tâm lý (vì không tạo giá trị thực)", "B. Tích sản (vì đâù tư vào bản thân dù chưa sử dụng)", "C. Không thể xác định", "D. Tích sản thật"],
    answer: 0
  },
  {
    id: 77,
    question: "Tài sản số được hiểu là gì trong Luật Công nghiệp Công Nghệ số 2025?",
    options: ["A. Là loại tiền mã hóa", "B. Là thông tin số có thể định danh, có giá trị và được xác lập quyền sở hữu, có thể được giao dịch trong môi trường số.", "C. Là tài sản ảo", "D. Không được định nghĩa rõ ràng"],
    answer: 1
  },
  {
    id: 78,
    question: "Bạn mua gói bảo hiểm nhân thọ đóng phí 10 năm, không đầu tư, chỉ bảo vệ. Bạn tin rằng mình đang:",
    options: ["A. Mua tiêu sản (vì không tạo ra dòng tiền)", "B. Mua tích sản (vì bảo vệ rủi ro và an toàn tài chính)", "C. Đầu tư mạo hiểm", "D. Tất cả đều sai"],
    answer: 1
  },
  {
    id: 79,
    question: "Bạn đăng clip viral 1 triệu lượt xem nhưng không có đơn hàng. Bạn tự tin nghĩ mình có thương hiệu vững chắc để kiếm tiền. Đây là sai lầm gì?",
    options: ["A. Sai lầm quản lí (không biết chốt sale)", "B. Sai lầm dopamine ảo (ngỡ view là tiền)", "C. Sai lầm về định giá", "D. Không có sai lầm"],
    answer: 1
  },
  {
    id: 81,
    question: "Bạn nạp tiền vào app 12 tháng để lên hạng VIP, nhận khuyến mãi 5.000.000 VND nhưng khuyến mãi chỉ giảm tối đa 15% mỗi giao dịch. Bạn nghĩ mình đã tích lũy tài sản. Thực chất bạn đang?",
    options: ["A. Dính bẫy dopamine cấp bậc -> tưởng thăng hạng là sinh lời", "B. Đầu tư thông minh -> tích sản khuyến mãi", "C. Tiết kiệm chi phí", "D. Mua sắm thông minh"],
    answer: 0
  },
  {
    id: 82,
    question: "Bạn vào nhóm tài chính, thấy nhiều người khoe lãi coin xyz và mua ngay vì “ nhóm uy tín mà”. Bạn vừa rơi vào?",
    options: ["A. Bẫy đám dông ảo ( tin theo số đông chưa kiểm chứng )", "B. Bẫy buồng vang thông tin ( chỉ nghe điều mình muốn nghe )", "C. Bẫy FOMO tài chính", "D. Bẫy lãi suất"],
    answer: 0
  },
  {
    id: 83,
    question: "Bạn mua bảo hiểm điện tử giá rẻ, cam kết “ tặng voucher 1.000.000 VND nếu không có sự cố”. Khuyến mãi chỉ giảm tối đa 10% mỗi lần mua hàng. Bạn thực sự đang giữ?",
    options: ["A. Tích sản khuyến mãi -> vì có giá trị sử dụng", "B. Tiêu sản ngụy trang -> vì khuyến mãi giới hạn và chi phí bảo hiện đều là chi phí lặp", "C. Gói tích lũy hiệu quả", "D. Bảo hiểm giá rẻ"],
    answer: 1
  },
  {
    id: 84,
    question: "Bạn chi 55.000 VND/ ngày/ cốc cà phê. 5 ngày/ tuần. Nếu mua máy pha cà phê, giá 3.000.000VND + 300.000VND mỗi tháng cho nguyên liệu và điện nước. Bạn tiết kiệm được bao nhiêu trong 2 năm:",
    options: ["A. ~10.000.000 VND", "B. >18.000.000 VND", "C. ~5.000.000 VND", "D. Không tiết kiệm được gì"],
    answer: 1
  },
  {
    id: 85,
    question: "Bạn mua điện thoại 25.000.000 VND. Trả một lần: được hoàn 2.000.000 VND. Trả góp 0%: mất phí 2,5% (~625.000 VND ) và không được hoàn tiền. Bạn đang tốn thêm bao nhiêu nếu chọn trả góp?",
    options: ["A. >1.000.000 VND", "B. >2.500.000 VND", "C. Tốn thêm phí chuyển đổi", "D. Không tốn thêm chi phí"],
    answer: 1
  },
  {
    id: 86,
    question: "Bạn mua một chiếc máy tính xách tay giá 35.000.000 VND và làm freelence. Trong 1 năm, bạn kiếm được 50.000.000 VND từ nó. Bạn nghĩ chiếc laptop là:",
    options: ["A. Tích sản", "B. Tiêu sản", "C. Tài sản cố định", "D. Công cụ lao động"],
    answer: 0
  },
  {
    id: 87,
    question: "Bạn được rủ đầu tư vào quỹ “ siêu cổ tức 20%/ tháng”. Nghe nói do cựu nhân viên DC sáng lập. Bạn băn khoăn... Đây là tín hiệu cần “ tháo chạy” ngay lập tức?",
    options: ["A. Nhân vật sáng lập từng làm ở nơi danh tiếng", "B. Cam kết lợi nhuận cao bất thường", "C. Quỹ hoạt động công khai", "D. Bạn không có tiền"],
    answer: 1
  },
  {
    id: 88,
    question: "Gói bảo hiểm của bạn: Phí 20.000.000 VND/ năm. Hợp đồng 20 năm. Quyền lợi tử vong 500.000.000 VND. Cuối kỳ đáo hạn được hoàn lại toàn bộ phí đã đóng + lãi suất cam kết 3%/ năm ( lãi kép ). Nếu không xảy ra gì, cuối kỳ hạn sẽ nhận được bao nhiêu ( làm tròn )?",
    options: ["A. 520.000.000 VND", "B. 538.000.000 VND", "C. 400.000.000 VND", "D. 600.000.000 VND"],
    answer: 1
  },
  {
    id: 89,
    question: "Bạn lập startup, đổ toàn bộ tiền tiết kiệm vào sản phẩm nhưng không trả lương cho mình trong 1 năm. Khi startup thất bại, bạn định nộp đơn phá sản cá nhân. Việc không hạch toán lương trong 12 tháng có thể bị tòa xem là?",
    options: ["A. Quyết định cá nhân", "B. Dấu hiệu quản trị thiêú trách nhiệm", "C. Sai lầm kinh doanh", "D. Quyền của founder"],
    answer: 1
  },
  {
    id: 90,
    question: "Bạn góp 300.000.000 VND tiết kiệm vào 1 startup dưới danh nghĩa cho vay không lãi. Không có hợp đồng vay. Khi startup phá sản, bạn xin giữ lại số tiền đó trong quá trình xét xử tài sản thanh lý. Số tiền bạn góp sẽ được tòa xử lý theo hướng nào?",
    options: ["A. Có thể giữ lại nếu chứng minh là tài sản cá nhân", "B. Có nguy cơ mất trắng vì không hợp đồng, tiền đã hòa vào công ty", "C. Được ưu tiên trả lại", "D. Chia theo cổ phần"],
    answer: 1
  },
  {
    id: 91,
    question: "Trong 2 năm, bạn nhận “ cổ tức tạm ứng” là 5.000.000 VND/ tháng. Không gửi báo cáo tài chính. Năm thứ 3, công ty phá sản. Vậy bạn có đòi được phần vốn góp?",
    options: ["A. Không - vì cổ đông không có quyền ưu tiên hoàn trả khi doanh nghiệp phá sản", "B. Có - vì chưa nhận đủ lợi nhuận như cam kết nên vẫn được ưu tiên hoàn vốn", "C. Có nếu có hóa đơn", "D. Không có cách nào"],
    answer: 0
  },
  {
    id: 92,
    question: "Bạn thế chấp căn nhà giá trị 1.200.000.000 VND, vay 600.000.000 VND vốn kinh doanh. Sau 18 tháng không trả được nợ, ngân hàng phát mãi tài sản được 950.000.000 VND. Sau thanh toán khoản vay 600 triệu + 12%/ năm, chi phí phát mãi 5% giá bán, bạn còn lại bao nhiêu ( làm tròn )?",
    options: ["A. 122.000.000 VND", "B. 194.000.000 VND", "C. 150.000.000 VND", "D. 0 VND"],
    answer: 1
  },
  {
    id: 93,
    question: "Bạn mở quán cf với lãi ròng 5 triệu/ tháng. Tuy nhiên, bạn vẫn phải ứng tiền cá nhân bù dòng tiền mặt bằng, nhân sự và nguyên liệu. Sau 6 tháng, bạn không còn khả năng chi trả. Bạn đang gặp rủi ro gì?",
    options: ["A. Tỷ suất lợi nhuận thấp - chưa đủ để tái đầu tư", "B. Dòng tiền âm kéo dài - mất khả năng thanh toán dù có lợi nhuận kế toán", "C. Quản lý kém", "D. Thiếu khách hàng"],
    answer: 1
  },
  {
    id: 94,
    question: "Bạn là 1 nhà sáng tạo nội dung bán khóa học Excel. Tệp khách mục tiêu của bạn bão hòa. Cách mở rộng bền vững là gì?",
    options: ["A. Hạ giá liên tục để cạnh tranh", "B. Ra thêm các gói hướng dẫn 1-1", "C. Làm thêm eBook hướng dẫn", "D. Chạy affiliate cho khóa học khác"],
    answer: 1
  },
  {
    id: 95,
    question: "Theo cục thống kê, nhóm hàng hóa dịch vụ nào sau đây chiếm trọng số lớn nhất CPI của VN giai đoạn 2020-2025?",
    options: ["A. Nhà ở, nước, chất đốt", "B. Thuốc và dịch vụ y tế", "C. Hàng ăn và dịch vụ ăn uống", "D. Giáo dục"],
    answer: 2
  },
  {
    id: 96,
    question: "Bạn 25 tuổi, 4 năm kinh nghiệm, lương dưới 12 triệu. Đồng nghiệp mới vào lương đã 15 triệu. Bạn nên làm gì đầu tiên?",
    options: ["A. Xin nghỉ việc ngay", "B. Thương lượng lại lương với sếp", "C. Rà soát kỹ profile và đối chiếu giá thị trường", "D. Làm thêm job ngoài để bù lại"],
    answer: 2
  },
  {
    id: 97,
    question: "Trong mô hình lương thưởng đãi ngộ 3P, năng lực cá nhân của bạn được thể hiện qua...",
    options: ["A. Position", "B. Person", "C. Performance", "D. Potential"],
    answer: 1
  },
  {
    id: 98,
    question: "Bạn vay ngân hàng 200 triệu VND để khởi nghiệp, trả lãi trước, lãi suất 5%/ năm. Lãi suất thực tế của khoản vay là bao nhiêu?",
    options: ["A. 5%/ năm", "B. 5.26%/ năm", "C. 10%/năm", "D. 10.26%/năm"],
    answer: 1
  },
  {
    id: 99,
    question: "Thông thường, trong thời gian ân hạn của khoản vay, bạn sẽ..",
    options: ["A. Không phải trả lãi", "B. Không phải trả nợ gốc", "C. Không phải trả bất kì khoản tiền nào", "D. Được hưởng lãi suất ưu đãi"],
    answer: 1
  },
  {
    id: 100,
    question: "Theo VnEconomy (2025), lĩnh vực khởi nghiệp tại VN đang thu hút nhiều vốn đầu tư nhất là...",
    options: ["A. Thương mại điện tử", "B. Công nghệ viễn thông", "C. Công nghệ tài chính", "D. Công nghệ nông nghiệp và thực phẩm"],
    answer: 2
  },
  {
    id: 101,
    question: "Sắp xếp các tài sản sau đây theo mức độ thanh khoản tăng dần: (1) Căn hộ studio; (2) Bộ sưu tập mô hình; (3) 200.000 cổ phiếu blue-chip; (4) 1 BTC.",
    options: ["A. 2-4-1-3", "B. 3-2-4-1", "C. 4-1-3-2", "D. 2-1-4-3"],
    answer: 0
  },
  {
    id: 102,
    question: "Để được niêm yết trên sàn giao dịch chứng khoán, doanh nghiệp phải có mức vốn điều lệ tối thiểu là...",
    options: ["A. 20 tỷ VND", "B. 30 tỷ VND", "C. 40 tỷ VND", "D. 50 tỷ VND"],
    answer: 1
  },
  {
    id: 103,
    question: "Loại hình dự án nào hiện đang chiếm tỷ trọng lớn nhất trong danh mục đầu tư xanh tại Việt Nam?",
    options: ["A. Dự án năng lượng tái tạo", "B. Dự án xử lý chất thải và nước thải", "C. Dự án giao thông công cộng", "D. Dự án xây dựng công trình xanh"],
    answer: 0
  },
  {
    id: 104,
    question: "Theo số liệu của Cục Thống kê, nhóm người Việt Nam có tỷ lệ chi tiêu nhiều nhất cho nhà hàng, thực phẩm và đồ uống là...",
    options: ["A. Nhóm thu nhập thấp – trung bình", "B. Nhóm thu nhập trung bình – cao", "C. Nhóm sinh viên mới ra trường", "D. Nhóm có nhiều nguồn thu"],
    answer: 1
  },
  {
    id: 105,
    question: "Bạn hiện chi tiêu 12 triệu VND mỗi tháng. Nếu lạm phát bình quân là 5%/năm, thì sau 3 năm, bạn cần khoảng bao nhiêu mỗi tháng để duy trì mức sống hiện tại?",
    options: ["A. 10,1 triệu VND", "B. 12 triệu VND", "C. 13,9 triệu VND", "D. 17 triệu VND"],
    answer: 2
  },
  {
    id: 106,
    question: "Theo Cổng Thông tin điện tử Chính phủ (2024), tốc độ tăng trưởng thanh toán không dùng tiền mặt hằng năm ở Việt Nam đang...",
    options: ["A. Dẫn đầu Đông Nam Á", "B. Không theo kịp các quốc gia khác trong khu vực", "C. Bị cản trở bởi hạ tầng kỹ thuật công nghệ", "D. Chững lại so với các quốc gia đang phát triển"],
    answer: 0
  },
  {
    id: 107,
    question: "Bạn gặp phải rủi ro không thể đảm bảo thu nhập dài hạn cao hơn khi tham gia vào...",
    options: ["A. Thị trường đầu tư tài chính", "B. Nền kinh tế hợp đồng và lao động tự do", "C. Xu hướng nghỉ hưu sớm", "D. Công việc “bán mình cho tư bản”"],
    answer: 1
  },
  {
    id: 108,
    question: "Thành phố nào đang là trung tâm khởi nghiệp sôi động nhất Việt Nam tính đến năm 2025?",
    options: ["A. Hà Nội", "B. Đà Nẵng", "C. TP. Hồ Chí Minh", "D. Hạ Long"],
    answer: 2
  },
  {
    id: 109,
    question: "Startup của bạn đối mặt với rủi ro nào khi CAC tăng nhanh hơn LTV nhưng doanh thu vẫn tăng?",
    options: ["A. Rủi ro thanh khoản ngắn hạn", "B. Mất kiểm soát tăng trưởng", "C. Định giá bị pha loãng", "D. Hiệu quả truyền thông không bền vững"],
    answer: 0
  },
  {
    id: 110,
    question: "Theo số liệu mới nhất, nhóm ngành nào có xu hướng thu hút nhiều vốn đầu tư mạo hiểm tại Việt Nam nhất trong giai đoạn 2024–2025?",
    options: ["A. Fintech", "B. Bất động sản", "C. Nông nghiệp xanh", "D. Du lịch số hóa"],
    answer: 0
  },
  {
    id: 111,
    question: "Bạn đã tiết kiệm được 1 tỷ sau 10 năm đều đặn gửi tiết kiệm 6,5 triệu VND/tháng. Phép màu nào đã giúp bạn đạt được điều này?",
    options: ["A. Lãi suất kép 7%/năm", "B. Lãi suất đơn 7%/năm", "C. Lãi suất ưu đãi 7%/năm", "D. Lãi suất chiết khấu 7%/năm"],
    answer: 0
  },
  {
    id: 112,
    question: "Theo báo cáo Ngân hàng số của InCorp (2025), 3% là tỷ lệ người Việt Nam sử dụng...",
    options: ["A. Thẻ tín dụng", "B. Thẻ ghi nợ", "C. Sổ tiết kiệm", "D. Dịch vụ ký quỹ khi đầu tư"],
    answer: 0
  },
  {
    id: 113,
    question: "Nhận định nào sau đây là đúng về tín dụng cá nhân?",
    options: ["A. Thường kém nhạy cảm với lãi suất và nhạy cảm với chu kỳ kinh tế", "B. Thường nhạy cảm với lãi suất và kém nhạy với chu kỳ kinh tế", "C. Thường nhạy cảm với cả lãi suất và chu kỳ kinh tế", "D. Thường kém nhạy với cả lãi suất và chu kỳ kinh tế"],
    answer: 2
  },
  {
    id: 114,
    question: "Là một người dùng thẻ tín dụng thông minh, bạn không cho phép hạn mức thẻ vượt quá ___ thu nhập.",
    options: ["A. 50%", "B. 70%", "C. 85%", "D. 100%"],
    answer: 0
  },
  {
    id: 115,
    question: "Theo số liệu của Ngân hàng Nhà nước (2024), ngành nào đang chiếm tỷ trọng cao nhất trong cơ cấu tín dụng xanh?",
    options: ["A. Năng lượng tái tạo, năng lượng sạch", "B. Nông nghiệp xanh", "C. Quản lý nước bền vững", "D. Công trình xanh"],
    answer: 0
  },
  {
    id: 116,
    question: "Đây là hình ảnh nhận diện của...",
    options: ["A. Nền tảng giao dịch chứng khoán GRI", "B. Thị trường tín chỉ các-bon khu vực Châu Á – Thái Bình Dương", "C. Tổ chức phi chính phủ về Giáo dục Tài chính cá nhân", "D. Tổ chức Sáng kiến Báo cáo toàn cầu"],
    answer: 3
  },
  {
    id: 117,
    question: "Bạn đưa căn cước công dân và giấy tờ chứng minh thu nhập của mình cho ngân hàng để đổi lấy một khoản tín dụng. Đây là hình thức...",
    options: ["A. Tín dụng tín chấp", "B. Tín dụng đen", "C. Tín dụng cầm cố", "D. Tín dụng thế chấp"],
    answer: 0
  },
  {
    id: 118,
    question: "Hệ số tiết kiệm được hiểu như thế nào?",
    options: ["A. Khả năng thanh toán những khoản nợ ngắn hạn của bạn", "B. Khả năng thanh toán các chi phí sinh hoạt định kỳ nếu bạn mất thu nhập", "C. Cân bằng giữa nợ và thu nhập của bạn", "D. Thu nhập được chuyển hóa thành tài sản ròng của bạn"],
    answer: 3
  },
  {
    id: 119,
    question: "Bạn sử dụng quy tắc 114 trong tài chính cá nhân như thế nào?",
    options: ["A. Tính số tiền tiết kiệm sau một khoảng thời gian", "B. Ước tính thời gian để số tiền đầu tư tăng gấp ba", "C. Xác định tỷ lệ lạm phát hàng năm", "D. Gọi cứu hỏa khi “cháy túi”"],
    answer: 1
  },
  {
    id: 120,
    question: "Bạn mua túi hàng hiệu giá 20 triệu VND, sau 3 tháng đăng lại trên chợ đồ cũ giá 22 triệu VND. Đã có người trả 18 triệu VND. Nếu bán, bạn...",
    options: ["A. Lỗ 2 triệu VND", "B. Lỗ 4 triệu VND", "C. Lãi 2 triệu VND", "D. Lỗ giá trị tinh thần"],
    answer: 1
  },
  {
    id: 121,
    question: "Bạn vừa nhận một hợp đồng freelance 10 triệu VND. Công việc yêu cầu bạn tạm ứng 3 triệu VND cho phần mềm làm việc. Lúc này bạn…",
    options: ["A. Lưu hóa đơn để cộng vào hợp đồng", "B. Đề nghị dùng phần mềm miễn phí", "C. Tạm ứng bằng quỹ khẩn cấp", "D. Kiểm tra kỹ vì mùi scam rõ hơn deadline"],
    answer: 3
  },
  {
    id: 122,
    question: "Mỗi khi bạn được tăng thu nhập, tiêu chuẩn sống của bạn cao hơn và số tiền tiết kiệm giữ nguyên. Đây là biểu hiện của...",
    options: ["A. Chi tiêu hợp lý", "B. Lạm phát lối sống", "C. Kỳ vọng thu nhập cao", "D. Có làm thì mới có ăn"],
    answer: 1
  },
  {
    id: 123,
    question: "Bạn đã tiết kiệm được 1 tỷ sau 10 năm đều đặn gửi tiết kiệm 6,5 triệu VND/tháng. Phép màu nào đã giúp bạn đạt được điều này?",
    options: ["A. Quy tắc 25", "B. Chu kỳ kinh tế tăng trưởng tại Việt Nam", "C. Lãi kép 7%/năm", "D. Tất cả các phương án trên"],
    answer: 2
  },
  {
    id: 124,
    question: "Trách nhiệm xã hội của bạn được thể hiện trong kế hoạch Tài chính cá nhân như thế nào?",
    options: ["A. Bạn đóng thuế đầy đủ", "B. Bạn đầu tư vào các mã cổ phiếu bền vững", "C. Bạn dành 5% thu nhập cho các hoạt động thiện nguyện", "D. Tất cả các phương án trên"],
    answer: 3
  },
  {
    id: 125,
    question: "Bạn mua một mảnh đất với giá 2 tỷ VND và bán sau 5 năm. Nếu chi phí bảo dưỡng và thuế hàng năm là 2% giá trị mảnh đất, bạn đã bỏ ra...",
    options: ["A. 200 triệu VND", "B. 210 triệu VND", "C. 120 triệu VND", "D. 130 triệu VND"],
    answer: 0
  },
  {
    id: 126,
    question: "Là một nhà đầu tư mới bắt đầu, bạn cần phải theo dõi “bảng điện” mỗi ngày mới có thể yên tâm. Chi phí cơ hội bạn phải trả là gì?",
    options: ["A. Thời gian đăng nhập tài khoản đầu tư", "B. Phí giao dịch khi đầu tư", "C. Rủi ro khi đầu tư", "D. Khả năng sử dụng thời gian đó làm việc khác"],
    answer: 3
  },
  {
    id: 127,
    question: "Bạn mua 100 cổ phiếu ABC giá 50.000 VND, sau 1 năm giá lên 60.000 VND và nhận thêm 3.000 VND cổ tức mỗi cổ phiếu. Tổng lợi suất đầu tư của bạn là...",
    options: ["A. 20%", "B. 26%", "C. 32%", "D. 40%"],
    answer: 1
  },
  {
    id: 128,
    question: "Khoản tiền gửi tiết kiệm đáo hạn vào cuối tháng 6/2024 của bạn có gốc 1 tỷ VND, lãi 170 triệu VND. Thuế thu nhập cá nhân trên khoản lãi tiền gửi ngân hàng là...",
    options: ["A. 0 VND", "B. 1,7 triệu VND", "C. 17 triệu VND", "D. 8,5 triệu VND"],
    answer: 0
  },
  {
    id: 129,
    question: "Nguồn thu nào sau đây của bạn được áp mức thuế thu nhập cá nhân là 5%?",
    options: ["A. 1 tỷ VND khi chiến thắng Giải đấu Vũ trụ Đồng tiền", "B. Bạn được trả cổ tức bằng tiền mặt", "C. Tiền lãi từ khoản tiền bạn gửi tiết kiệm", "D. Tiền bạn được thừa kế từ ông bà ngoại"],
    answer: 1
  },
  {
    id: 130,
    question: "Khi dư tiền, bạn chuyển vào “ngăn tiết kiệm” trên app ngân hàng. Số tiền này sau đó phục vụ chi tiêu hàng tháng của bạn. Đây là hình thức...",
    options: ["A. Tiết kiệm ngắn hạn", "B. Tiết kiệm linh hoạt", "C. Tiết kiệm mạo hiểm", "D. Tiết kiệm như không"],
    answer: 1
  },
  {
    id: 131,
    question: "Theo báo cáo Xu hướng Tiêu dùng của NIQ (2024), có bao nhiêu phần trăm người tiêu dùng Việt Nam quan tâm đến những nỗ lực bảo vệ môi trường của các doanh nghiệp?",
    options: ["A. 12%", "B. 100%", "C. 76%", "D. 35%"],
    answer: 2
  },
  {
    id: 132,
    question: "Nhận định nào sau đây về các quyết định tiêu dùng của cá nhân là SAI?",
    options: ["A. Ưu tiên những hàng hóa, dịch vụ phản ánh vai trò địa vị xã hội của mình", "B. Lời khuyên từ bạn bè ảnh hưởng mạnh hơn quảng cáo", "C. Bị ảnh hưởng bởi niềm tin với các hàng hóa và nhãn hiệu", "D. Càng mua sắm nhiều thì càng tiêu tiền thông minh"],
    answer: 3
  },
  {
    id: 133,
    question: "Sức mua dài hạn của bạn tăng lên khi nào?",
    options: ["A. Mở thẻ tín dụng", "B. Thu nhập định kỳ tăng", "C. Có tiền mừng tuổi", "D. Tất cả các phương án trên"],
    answer: 1
  },
  {
    id: 134,
    question: "Khoản nào sau đây KHÔNG được coi là dòng tiền cá nhân của bạn?",
    options: ["A. Sổ tiết kiệm của bạn", "B. Tiền bạn trúng xổ số", "C. Cổ tức từ danh mục chứng khoán", "D. Tiền đóng bảo hiểm nhân thọ"],
    answer: 3
  },
  {
    id: 135,
    question: "Bạn có thu nhập hàng tháng là 20 triệu VND. Theo quy tắc 6 chiếc lọ, số tiền bạn nên dành cho quỹ tự do tài chính (FFA) là bao nhiêu?",
    options: ["A. 1 triệu VND", "B. 2 triệu VND", "C. 10 triệu VND", "D. 0 đồng, lương tháng 20 triệu VND là bạn tự do tài chính rồi"],
    answer: 1
  },
  {
    id: 136,
    question: "Bạn đưa giấy tờ sở hữu ô tô của mình cho một bên cho vay ngang hàng (P2P). Do trễ hạn trả nợ 14 ngày, bên cho vay yêu cầu bạn trả lãi suất 200%. Đây là hình thức...",
    options: ["A. Tín dụng tín chấp", "B. Tín dụng thế chấp", "C. Tín dụng cầm cố", "D. Tín dụng đen"],
    answer: 3
  },
  {
    id: 137,
    question: "Báo động! Phần thu nhập bạn cần phải trích ra để thanh toán nợ cá nhân hàng tháng đã vượt quá...",
    options: ["A. 10%", "B. 20%", "C. 30%", "D. 50%"],
    answer: 2
  },
  {
    id: 138,
    question: "Lãi suất đối với những khoản tín dụng trung và dài hạn “đổi mood” như thế nào?",
    options: ["A. Cố định", "B. Được điều chỉnh mỗi năm một lần dựa trên lãi suất cơ sở", "C. Tuỳ từng định chế tài chính", "D. Tất cả các phương án trên"],
    answer: 3
  },
  {
    id: 139,
    question: "Suốt 2 năm, tháng nào bạn cũng đều đặn “chuyển khoản cho tương lai” 3 triệu VND, lãi 8%/năm, lãi cộng dồn hàng tháng. Lúc này, bạn đang có...",
    options: ["A. 12 triệu VND", "B. 36 triệu VND", "C. 77 triệu VND", "D. 98 triệu VND"],
    answer: 2
  },
  {
    id: 140,
    question: "Theo Nghị định 94/2025/NĐ-CP về sandbox ngân hàng, công nghệ tài chính nào dưới đây đủ điều kiện “vào sân” thử nghiệm có kiểm soát?",
    options: ["A. Chấm điểm tín dụng", "B. Chia sẻ dữ liệu qua giao diện lập trình ứng dụng mở (Open API)", "C. Cho vay ngang hàng", "D. Tất cả các phương án trên"],
    answer: 3
  },
  {
    id: 141,
    question: "Tỷ lệ thuế thu nhập cá nhân lũy tiến cao nhất tại Việt Nam hiện nay là bao nhiêu?",
    options: ["A. 25%", "B. 30%", "C. 35%", "D. 40%"],
    answer: 2
  },
  {
    id: 142,
    question: "Chi phí vốn (Cost of Capital) của doanh nghiệp phản ánh điều gì?",
    options: ["A. Lợi nhuận kỳ vọng của cổ đông", "B. Chi phí lãi vay nợ", "C. Mức lợi nhuận tối thiểu để bù đắp chi phí vốn nợ và vốn chủ", "D. Tổng tài sản doanh nghiệp"],
    answer: 2
  },
  {
    id: 143,
    question: "Khi thị trường chứng khoán trong xu hướng giảm (Bear Market), tâm lý nhà đầu tư thường thấy là...",
    options: ["A. FOMO", "B. Tham lam", "C. Hoảng loạn và sợ hãi", "D. Hưng phấn"],
    answer: 2
  },
  {
    id: 144,
    question: "Đâu là đặc điểm KHÔNG giống nhau giữa trái phiếu và cổ phiếu?",
    options: ["A. Đều là công cụ huy động vốn", "B. Đều có thể giao dịch trên sàn", "C. Trái phiếu cam kết trả lãi cố định, cổ phiếu phụ thuộc vào lợi nhuận", "D. Cả hai đều được đảm bảo bởi tài sản doanh nghiệp"],
    answer: 3
  },
  {
    id: 145,
    question: "Đầu tư vào quỹ ETF (Exchange Traded Fund) khác với đầu tư vào cổ phiếu riêng lẻ ở điểm nào?",
    options: ["A. Phải quản lý danh mục thủ công", "B. Đa dạng hóa danh mục ngay tức thì", "C. Lợi nhuận luôn cao hơn thị trường", "D. Tốn nhiều phí môi giới hơn khi giao dịch"],
    answer: 1
  },
  {
    id: 146,
    question: "Số tiền bạn cần để nghỉ hưu dựa trên quy tắc 4% (Safe Withdrawal Rate) là bao nhiêu nếu chi phí sinh hoạt năm là 300 triệu VND?",
    options: ["A. 3 tỷ VND", "B. 5 tỷ VND", "C. 7,5 tỷ VND", "D. 10 tỷ VND"],
    answer: 2
  },
  {
    id: 147,
    question: "Khi sử dụng thẻ tín dụng, việc chỉ trả số tiền tối thiểu hàng tháng dẫn đến rủi ro gì?",
    options: ["A. Lãi suất kép bị cộng dồn", "B. Điểm tín dụng tăng", "C. Giảm hạng thẻ", "D. Được ngân hàng ưu đãi lãi suất"],
    answer: 0
  },
  {
    id: 148,
    question: "Tác động của việc tăng lãi suất điều hành của Ngân hàng Nhà nước tới thị trường chứng khoán thường là gì?",
    options: ["A. Tích cực, giá cổ phiếu tăng", "B. Tiêu cực, áp lực chi phí vốn tăng, định giá giảm", "C. Không ảnh hưởng", "D. Chỉ ảnh hưởng tới nhóm ngành ngân hàng"],
    answer: 1
  },
  {
    id: 149,
    question: "Sự khác biệt giữa phân tích cơ bản (Fundamental Analysis) và phân tích kỹ thuật (Technical Analysis) là gì?",
    options: ["A. Một bên dự đoán tương lai, một bên nhìn quá khứ", "B. Một bên dựa trên giá trị nội tại, một bên dựa trên xu hướng giá, khối lượng", "C. Một bên dùng cho người giàu, một bên dùng cho người nghèo", "D. Không có sự khác biệt"],
    answer: 1
  },
  {
    id: 150,
    question: "Khái niệm 'Đa dạng hóa danh mục đầu tư' nhằm mục đích gì?",
    options: ["A. Tăng lợi nhuận tối đa", "B. Giảm thiểu rủi ro phi hệ thống", "C. Loại bỏ hoàn toàn rủi ro", "D. Tăng tính thanh khoản"],
    answer: 1
  },
  {
    id: 151,
    question: "Tỷ lệ ký quỹ ban đầu (Initial Margin) trong giao dịch ký quỹ (Margin Trading) dùng để làm gì?",
    options: ["A. Thế chấp khoản vay", "B. Đảm bảo khả năng thanh toán cho vị thế giao dịch", "C. Phí dịch vụ cho công ty chứng khoán", "D. Lãi suất vay nợ"],
    answer: 1
  },
  {
    id: 152,
    question: "Khái niệm 'Short Selling' trong chứng khoán có nghĩa là gì?",
    options: ["A. Mua thấp, bán cao", "B. Bán cổ phiếu khi chưa sở hữu để hưởng lợi từ giá giảm", "C. Mua bán cổ phiếu trong ngày", "D. Đầu tư vào các công ty nhỏ"],
    answer: 1
  },
  {
    id: 153,
    question: "Hệ số Beta đo lường điều gì của cổ phiếu so với thị trường?",
    options: ["A. Mức độ biến động", "B. Khả năng sinh lời", "C. Khả năng thanh toán", "D. Mức độ cổ tức"],
    answer: 0
  },
  {
    id: 154,
    question: "Khi doanh nghiệp phát hành thêm cổ phiếu, điều gì sẽ xảy ra với cổ đông hiện hữu?",
    options: ["A. Lợi nhuận tăng đáng kể", "B. Tỷ lệ sở hữu có thể bị pha loãng", "C. Cổ tức chắc chắn tăng", "D. Giá cổ phiếu luôn tăng"],
    answer: 1
  },
  {
    id: 155,
    question: "Chỉ số EPS (Earning Per Share) cho biết điều gì?",
    options: ["A. Vốn hóa thị trường", "B. Lợi nhuận phân bổ cho mỗi cổ phiếu phổ thông", "C. Tỷ lệ cổ tức", "D. Sức khỏe tài chính tổng thể"],
    answer: 1
  },
  {
    id: 156,
    question: "Khi lãi suất ngân hàng tăng mạnh, tài sản nào thường bị ảnh hưởng tiêu cực nhất?",
    options: ["A. Tiền gửi tiết kiệm", "B. Cổ phiếu và Bất động sản", "C. Vàng", "D. Ngoại tệ"],
    answer: 1
  },
  {
    id: 157,
    question: "Đâu là yếu tố ảnh hưởng trực tiếp đến định giá bất động sản?",
    options: ["A. Thời tiết", "B. Vị trí địa lý và quy hoạch", "C. Màu sắc trang trí", "D. Tên nhà đầu tư"],
    answer: 1
  },
  {
    id: 158,
    question: "Khái niệm 'Dòng tiền tự do' (Free Cash Flow) đối với doanh nghiệp là gì?",
    options: ["A. Lợi nhuận ròng", "B. Tiền thu được từ hoạt động kinh doanh trừ chi phí vốn", "C. Tổng doanh thu", "D. Tiền mặt tại quỹ"],
    answer: 1
  },
  {
    id: 159,
    question: "Nếu một quốc gia rơi vào tình trạng lạm phát, giá trị nội tệ có xu hướng...",
    options: ["A. Tăng giá", "B. Giảm giá", "C. Không thay đổi", "D. Tăng giá mạnh"],
    answer: 1
  },
  {
    id: 160,
    question: "Chính sách tiền tệ nới lỏng (giảm lãi suất, bơm tiền) thường có mục đích chính là...",
    options: ["A. Kiềm chế lạm phát", "B. Thúc đẩy sản xuất và tiêu dùng", "C. Tăng giá trị nội tệ", "D. Giảm nợ công"],
    answer: 1
  },
  {
    id: 161,
    question: "Khi nói về tiết kiệm, điều quan trọng nhất là...",
    options: ["A. Tiết kiệm càng nhiều càng tốt", "B. Duy trì thói quen đều đặn", "C. Tiết kiệm khi dư thừa", "D. Chỉ cần tiết kiệm 1 năm đầu"],
    answer: 1
  },
  {
    id: 162,
    question: "Bạn mua trái phiếu 100 triệu, lãi suất 8%/năm, trả lãi hàng năm. Sau 2 năm, bạn quyết định bán lại trái phiếu này ở mức giá 105 triệu. Tổng lợi nhuận bạn thu được là:",
    options: ["A. 16 triệu", "B. 21 triệu", "C. 25 triệu", "D. 11 triệu"],
    answer: 1
  },
  {
    id: 163,
    question: "Khái niệm 'Thị trường Gấu' (Bear Market) được xác định khi thị trường giảm bao nhiêu % từ đỉnh?",
    options: ["A. 10%", "B. 20%", "C. 30%", "D. 50%"],
    answer: 1
  },
  {
    id: 164,
    question: "Tại sao vàng được coi là tài sản trú ẩn an toàn?",
    options: ["A. Khả năng sinh lời cao đột biến", "B. Tính khan hiếm và khả năng chống lạm phát", "C. Dễ vận chuyển", "D. Được ngân hàng bảo lãnh"],
    answer: 1
  },
  {
    id: 165,
    question: "Hợp đồng tương lai (Futures contract) trong tài chính là gì?",
    options: ["A. Mua bán hàng hóa với giá hiện tại", "B. Cam kết mua hoặc bán tài sản tại một mức giá xác định vào một thời điểm trong tương lai", "C. Hình thức vay nợ dài hạn", "D. Hình thức bảo hiểm đầu tư"],
    answer: 1
  },
  {
    id: 166,
    question: "Đối với người mới bắt đầu, chiến lược đầu tư nào sau đây giúp giảm rủi ro tốt nhất?",
    options: ["A. Lướt sóng hàng ngày", "B. Đa dạng hóa danh mục đầu tư", "C. Chỉ tập trung vào cổ phiếu giá thấp", "D. Sử dụng đòn bẩy tài chính tối đa"],
    answer: 1
  },
  {
    id: 167,
    question: "Mục đích của việc kiểm toán báo cáo tài chính là gì?",
    options: ["A. Tăng lợi nhuận cho công ty", "B. Đảm bảo tính trung thực và hợp lý của báo cáo tài chính", "C. Thay thế kế toán doanh nghiệp", "D. Quyết định giá cổ phiếu"],
    answer: 1
  },
  {
    id: 168,
    question: "Nếu P/E của một cổ phiếu cao hơn đáng kể so với trung bình ngành, điều này có thể hiểu là:",
    options: ["A. Cổ phiếu đang rẻ", "B. Nhà đầu tư kỳ vọng tăng trưởng cao", "C. Công ty đang thua lỗ", "D. Cổ phiếu không đáng đầu tư"],
    answer: 1
  },
  {
    id: 169,
    question: "Thuế thu nhập doanh nghiệp thường được tính dựa trên:",
    options: ["A. Tổng doanh thu", "B. Lợi nhuận trước thuế", "C. Vốn điều lệ", "D. Giá trị tài sản"],
    answer: 1
  },
  {
    id: 170,
    question: "Tại sao việc quản lý dòng tiền cá nhân quan trọng hơn việc chỉ có thu nhập cao?",
    options: ["A. Vì dòng tiền quyết định khả năng chi trả của bạn", "B. Vì thu nhập cao không đảm bảo giàu có nếu chi tiêu không kiểm soát", "C. Vì người giàu không quan tâm tới thu nhập", "D. Vì bạn chỉ cần dòng tiền"],
    answer: 1
  },
  {
    id: 171,
    question: "Chỉ số ROI (Return on Investment) được tính bằng công thức nào?",
    options: ["A. (Lợi nhuận ròng / Tổng chi phí đầu tư) x 100", "B. Doanh thu / Chi phí", "C. Lợi nhuận / Doanh thu", "D. Tài sản / Nợ"],
    answer: 0
  },
  {
    id: 172,
    question: "Khoản dự phòng khẩn cấp tối ưu nên bao phủ chi phí sinh hoạt trong bao lâu?",
    options: ["A. 1-2 tháng", "B. 3-6 tháng", "C. 12 tháng trở lên", "D. Không cần thiết"],
    answer: 1
  },
  {
    id: 173,
    question: "Khi đầu tư, rủi ro phi hệ thống (Unsystematic Risk) là gì?",
    options: ["A. Rủi ro của toàn bộ thị trường", "B. Rủi ro đặc thù của một doanh nghiệp hoặc ngành", "C. Rủi ro do lãi suất thay đổi", "D. Rủi ro do lạm phát"],
    answer: 1
  },
  {
    id: 174,
    question: "Khái niệm 'Capital Gain' trong đầu tư là gì?",
    options: ["A. Lợi nhuận từ cổ tức", "B. Lợi nhuận từ việc bán tài sản với giá cao hơn giá mua", "C. Khoản tiền lãi ngân hàng", "D. Chi phí quản lý đầu tư"],
    answer: 1
  },
  {
    id: 175,
    question: "Tại sao thời gian là yếu tố quan trọng nhất của lãi kép?",
    options: ["A. Vì tiền được gửi lâu hơn", "B. Vì lãi kép tạo ra tác động lũy thừa theo thời gian", "C. Vì giúp tránh được thuế", "D. Vì tạo ra nhiều lựa chọn hơn"],
    answer: 1
  },
  {
    id: 176,
    question: "Đầu tư vào các cổ phiếu giá trị (Value Investing) thường dựa trên:",
    options: ["A. Dự đoán xu hướng giá ngắn hạn", "B. Mua cổ phiếu có giá thấp hơn giá trị nội tại", "C. Mua cổ phiếu đang tăng trưởng mạnh", "D. Mua cổ phiếu có khối lượng giao dịch lớn"],
    answer: 1
  },
  {
    id: 177,
    question: "Chỉ số P/S (Price-to-Sales) được sử dụng để định giá dựa trên:",
    options: ["A. Doanh thu", "B. Lợi nhuận ròng", "C. Vốn chủ sở hữu", "D. Tổng tài sản"],
    answer: 0
  },
  {
    id: 178,
    question: "Khi một công ty trả cổ tức bằng tiền mặt, điều gì xảy ra với giá cổ phiếu trên thị trường ngay ngày giao dịch không hưởng quyền?",
    options: ["A. Giá tăng tương ứng", "B. Giá giảm tương ứng với mức cổ tức", "C. Giá không đổi", "D. Giá biến động ngẫu nhiên"],
    answer: 1
  },
  {
    id: 179,
    question: "Đòn bẩy tài chính (Financial Leverage) là gì?",
    options: ["A. Vay nợ để đầu tư nhằm tăng tiềm năng lợi nhuận", "B. Bán tài sản để trả nợ", "C. Tăng vốn chủ sở hữu", "D. Tiết kiệm chi phí đầu tư"],
    answer: 0
  },
  {
    id: 180,
    question: "Theo lý thuyết đầu tư, mối quan hệ giữa rủi ro và lợi nhuận kỳ vọng là:",
    options: ["A. Tỷ lệ nghịch", "B. Tỷ lệ thuận", "C. Không có mối quan hệ", "D. Phức tạp và không thể dự đoán"],
    answer: 1
  },
  {
    id: 181,
    question: "Tài sản ròng (Net Worth) của cá nhân được tính bằng:",
    options: ["A. Tổng thu nhập – Tổng chi tiêu", "B. Tổng tài sản – Tổng nợ", "C. Tổng tài sản + Tổng nợ", "D. Tổng thu nhập"],
    answer: 1
  },
  {
    id: 182,
    question: "Khi bạn thanh toán nợ, việc trả 'gốc' và 'lãi' như thế nào là tối ưu nhất?",
    options: ["A. Chỉ trả gốc", "B. Chỉ trả lãi", "C. Trả cả gốc và lãi theo kỳ hạn", "D. Không trả nợ"],
    answer: 2
  },
  {
    id: 183,
    question: "Bạn mua trái phiếu doanh nghiệp, rủi ro lớn nhất bạn có thể gặp là gì?",
    options: ["A. Doanh nghiệp mất khả năng thanh toán (vỡ nợ)", "B. Giá trái phiếu tăng", "C. Lãi suất ngân hàng giảm", "D. Thị trường chứng khoán tăng mạnh"],
    answer: 0
  },
  {
    id: 184,
    question: "Quy tắc 50/30/20 trong chi tiêu đề xuất dành bao nhiêu phần trăm cho nhu cầu thiết yếu?",
    options: ["A. 20%", "B. 30%", "C. 50%", "D. 60%"],
    answer: 2
  },
  {
    id: 185,
    question: "Hiệu ứng 'Diderot' trong tiêu dùng là gì?",
    options: ["A. Mua sắm vì giảm giá", "B. Mua một món hàng mới dẫn đến nhu cầu mua thêm nhiều thứ khác đồng bộ với nó", "C. Chỉ mua hàng khi cần thiết", "D. Mua sắm theo xu hướng"],
    answer: 1
  },
  {
    id: 186,
    question: "Số dư tài khoản an toàn là số tiền bạn nên có để làm gì đầu tiên?",
    options: ["A. Đầu tư vào cổ phiếu", "B. Chi trả trong trường hợp khẩn cấp", "C. Mua sắm tài sản", "D. Du lịch"],
    answer: 1
  },
  {
    id: 187,
    question: "Khi đầu tư, lệnh 'Stop Loss' (Dừng lỗ) có tác dụng gì?",
    options: ["A. Tăng lợi nhuận khi giá lên", "B. Bán tự động khi giá chạm mức lỗ xác định để bảo vệ vốn", "C. Mua thêm khi giá thấp", "D. Tránh mất phí giao dịch"],
    answer: 1
  },
  {
    id: 188,
    question: "Khái niệm 'Đầu tư giá trị' nổi tiếng gắn liền với nhà đầu tư nào?",
    options: ["A. Elon Musk", "B. Warren Buffett", "C. Steve Jobs", "D. Jeff Bezos"],
    answer: 1
  },
  {
    id: 189,
    question: "Công thức tính lãi kép là gì?",
    options: ["A. A = P(1 + r/n)^(nt)", "B. A = P(1 + rt)", "C. A = P + r", "D. A = P / (1+r)"],
    answer: 0
  },
  {
    id: 190,
    question: "Tầm quan trọng của việc hiểu các loại phí khi đầu tư là gì?",
    options: ["A. Phí không quan trọng", "B. Phí làm giảm lợi nhuận thực tế theo thời gian", "C. Phí giúp tăng tài sản", "D. Không ảnh hưởng gì đến lợi nhuận"],
    answer: 1
  },
  {
    id: 191,
    question: "Chỉ số CPI (Consumer Price Index) dùng để đo lường điều gì?",
    options: ["A. Giá trị cổ phiếu", "B. Mức độ thay đổi giá cả của giỏ hàng hóa và dịch vụ tiêu dùng", "C. Tỷ lệ thất nghiệp", "D. Tốc độ tăng trưởng doanh thu doanh nghiệp"],
    answer: 1
  },
  {
    id: 192,
    question: "Lãi suất thực (Real Interest Rate) được tính như thế nào?",
    options: ["A. Lãi suất danh nghĩa + tỷ lệ lạm phát", "B. Lãi suất danh nghĩa - tỷ lệ lạm phát", "C. Lãi suất danh nghĩa x tỷ lệ lạm phát", "D. Lãi suất danh nghĩa / tỷ lệ lạm phát"],
    answer: 1
  },
  {
    id: 193,
    question: "Khi giá trị của đồng nội tệ giảm so với ngoại tệ (phá giá tiền tệ), điều gì thường xảy ra với xuất khẩu?",
    options: ["A. Xuất khẩu giảm", "B. Xuất khẩu tăng", "C. Không ảnh hưởng đến xuất khẩu", "D. Xuất khẩu chỉ phụ thuộc vào chất lượng hàng hóa"],
    answer: 1
  },
  {
    id: 194,
    question: "Khái niệm 'Diversification' trong đầu tư giúp gì cho nhà đầu tư?",
    options: ["A. Đảm bảo lợi nhuận cao nhất", "B. Giảm rủi ro bằng cách phân bổ vốn vào nhiều tài sản khác nhau", "C. Loại bỏ tất cả các loại rủi ro", "D. Tăng số lượng giao dịch"],
    answer: 1
  },
  {
    id: 195,
    question: "Tỷ lệ dự trữ bắt buộc tăng lên sẽ tác động thế nào đến cung tiền trong nền kinh tế?",
    options: ["A. Làm tăng cung tiền", "B. Làm giảm cung tiền", "C. Không tác động đến cung tiền", "D. Làm cung tiền tăng gấp đôi"],
    answer: 1
  },
  {
    id: 196,
    question: "Sự khác biệt giữa nợ xấu (Bad Debt) và nợ cần chú ý (Group 2) là gì?",
    options: ["A. Không có gì khác biệt", "B. Nợ xấu có thời gian quá hạn dài hơn và rủi ro mất vốn cao hơn", "C. Nợ xấu có lãi suất thấp hơn", "D. Nợ cần chú ý có rủi ro cao hơn nợ xấu"],
    answer: 1
  },
  {
    id: 197,
    question: "Tại sao nên có bảo hiểm nhân thọ trong kế hoạch tài chính?",
    options: ["A. Để kiếm lời từ công ty bảo hiểm", "B. Để bảo vệ thu nhập và giảm rủi ro tài chính cho người phụ thuộc", "C. Để thay thế hoàn toàn tiết kiệm", "D. Để đăng ký vay vốn dễ hơn"],
    answer: 1
  },
  {
    id: 198,
    question: "Khái niệm 'Opportunity Cost' (Chi phí cơ hội) trong cuộc sống là gì?",
    options: ["A. Số tiền bạn chi tiêu", "B. Giá trị của lựa chọn thay thế tốt nhất bị bỏ lỡ", "C. Lợi nhuận thu được khi quyết định đúng", "D. Tổng tất cả các chi phí"],
    answer: 1
  },
  {
    id: 199,
    question: "Dòng tiền âm (Negative Cash Flow) xảy ra khi nào?",
    options: ["A. Doanh thu > Chi phí", "B. Tiền chi ra > Tiền thu vào", "C. Tài sản > Nợ", "D. Lợi nhuận > 0"],
    answer: 1
  },
  {
    id: 200,
    question: "Chứng chỉ quỹ mở (Open-ended Fund) có đặc điểm gì nổi bật?",
    options: ["A. Chỉ được mua bán vào ngày cố định", "B. Nhà đầu tư có thể bán lại chứng chỉ quỹ cho công ty quản lý bất cứ lúc nào", "C. Không chịu rủi ro thị trường", "D. Chỉ được đầu tư Trái phiếu"],
    answer: 1
  },
  {
    id: 201,
    question: "Tại sao cần phải tái cân bằng (rebalancing) danh mục đầu tư định kỳ?",
    options: ["A. Để tăng số lượng tài sản trong danh mục", "B. Để đảm bảo tỷ lệ phân bổ tài sản quay về mục tiêu ban đầu", "C. Để luôn theo đuổi các cổ phiếu hot nhất", "D. Để giảm phí giao dịch"],
    answer: 1
  },
  {
    id: 202,
    question: "Khái niệm 'Bear Market' trái ngược với khái niệm nào?",
    options: ["A. Bull Market", "B. Side-way Market", "C. Neutral Market", "D. Flat Market"],
    answer: 0
  },
  {
    id: 203,
    question: "Sự khác biệt cơ bản giữa Thẻ tín dụng và Thẻ ghi nợ là gì?",
    options: ["A. Thẻ tín dụng sử dụng tiền của bạn, thẻ ghi nợ sử dụng tiền ngân hàng", "B. Thẻ tín dụng cho phép chi tiêu trước trả sau, thẻ ghi nợ chi tiêu tiền có sẵn trong tài khoản", "C. Không có sự khác biệt gì", "D. Thẻ ghi nợ có lãi suất cao hơn"],
    answer: 1
  },
  {
    id: 204,
    question: "Khi doanh nghiệp gặp khó khăn tài chính, ai được ưu tiên thanh toán đầu tiên sau khi thanh lý tài sản?",
    options: ["A. Cổ đông", "B. Chủ nợ (trái chủ, ngân hàng)", "C. Ban giám đốc", "D. Nhà cung cấp"],
    answer: 1
  },
  {
    id: 205,
    question: "Tỷ lệ P/E (Price-to-Earnings ratio) thấp thường được xem là dấu hiệu?",
    options: ["A. Cổ phiếu đang đắt", "B. Cổ phiếu có thể bị định giá thấp hoặc doanh nghiệp không có tiềm năng tăng trưởng", "C. Doanh nghiệp đang nợ nhiều nhất ngành", "D. Doanh nghiệp không bao giờ chia cổ tức"],
    answer: 1
  },
  {
    id: 206,
    question: "Thị trường tài chính là gì?",
    options: ["A. Nơi mua bán hàng hóa", "B. Nơi huy động và phân bổ vốn giữa người thừa vốn và người thiếu vốn", "C. Nơi sản xuất hàng hóa công nghiệp", "D. Cơ quan hành chính quốc gia"],
    answer: 1
  },
  {
    id: 207,
    question: "Lợi ích của việc nắm giữ cổ phiếu dài hạn là gì?",
    options: ["A. Hưởng lợi từ sự tăng trưởng của doanh nghiệp và cổ tức", "B. Tránh hoàn toàn mọi rủi ro thị trường", "C. Chắc chắn kiếm tiền sau 1 tháng", "D. Không cần quan tâm tới tình hình kinh tế"],
    answer: 0
  },
  {
    id: 208,
    question: "Khi đầu tư vào bất động sản cho thuê, chỉ số nào quan trọng để đánh giá hiệu quả?",
    options: ["A. Diện tích sàn", "B. Tỷ suất sinh lời cho thuê (Rental Yield)", "C. Số lượng phòng", "D. Màu sơn nhà"],
    answer: 1
  },
  {
    id: 209,
    question: "Rủi ro lãi suất (Interest Rate Risk) ảnh hưởng mạnh nhất đến loại tài sản nào?",
    options: ["A. Tiền mặt", "B. Trái phiếu dài hạn", "C. Bất động sản", "D. Kim cương"],
    answer: 1
  },
  {
    id: 210,
    question: "Mục đích của việc thiết lập ngân sách cá nhân là gì?",
    options: ["A. Hạn chế hoàn toàn mọi chi tiêu", "B. Kiểm soát thu chi và đạt được mục tiêu tài chính", "C. Để có tiền mua xe sang", "D. Chỉ để ghi chép lại cho vui"],
    answer: 1
  },
  {
    id: 211,
    question: "Chính sách tài khóa (Fiscal Policy) do cơ quan nào chịu trách nhiệm chính?",
    options: ["A. Ngân hàng Trung ương", "B. Chính phủ (Bộ Tài chính)", "C. Ủy ban Chứng khoán", "D. Các ngân hàng thương mại"],
    answer: 1
  },
  {
    id: 212,
    question: "Khi nền kinh tế tăng trưởng quá nóng, Chính phủ thường thực hiện chính sách tài khóa gì?",
    options: ["A. Nới lỏng (tăng chi tiêu, giảm thuế)", "B. Thắt chặt (giảm chi tiêu, tăng thuế)", "C. Không thay đổi gì", "D. In thêm tiền"],
    answer: 1
  },
  {
    id: 213,
    question: "Hệ số thanh toán hiện hành (Current Ratio) được tính bằng:",
    options: ["A. Tài sản ngắn hạn / Nợ ngắn hạn", "B. Tài sản dài hạn / Nợ dài hạn", "C. Tổng tài sản / Tổng nợ", "D. Lợi nhuận / Doanh thu"],
    answer: 0
  },
  {
    id: 214,
    question: "Khái niệm 'Dollar-Cost Averaging' (DCA) có ưu điểm lớn nhất là gì?",
    options: ["A. Luôn đạt lợi nhuận cao nhất trong ngắn hạn", "B. Giảm bớt tác động của biến động giá khi đầu tư định kỳ", "C. Giúp nhà đầu tư đoán định đỉnh thị trường", "D. Không tốn phí giao dịch"],
    answer: 1
  },
  {
    id: 215,
    question: "Thuật ngữ 'Blue-chip stock' dùng để chỉ loại cổ phiếu nào?",
    options: ["A. Cổ phiếu của các công ty nhỏ, mới thành lập", "B. Cổ phiếu của các công ty lớn, uy tín, tài chính vững mạnh", "C. Cổ phiếu của các công ty thua lỗ", "D. Cổ phiếu đang bị niêm yết hạn chế"],
    answer: 1
  },
  {
    id: 216,
    question: "Khi lạm phát tăng cao, tiền mặt có xu hướng:",
    options: ["A. Tăng giá trị", "B. Giảm sức mua", "C. Không thay đổi", "D. Tăng lãi suất"],
    answer: 1
  },
  {
    id: 217,
    question: "Đâu là yếu tố cốt lõi của đầu tư dài hạn?",
    options: ["A. Sự kiên nhẫn và kỷ luật", "B. Đầu cơ theo tin tức", "C. Sử dụng margin tối đa", "D. Chỉ quan tâm tới lợi nhuận tháng"],
    answer: 0
  },
  {
    id: 218,
    question: "Khái niệm 'Margin Call' xảy ra khi:",
    options: ["A. Giá cổ phiếu tăng vượt mức", "B. Tỷ lệ ký quỹ giảm xuống dưới mức tối thiểu yêu cầu", "C. Công ty trả cổ tức", "D. Bạn tự nguyện trả nợ"],
    answer: 1
  },
  {
    id: 219,
    question: "Lợi nhuận vốn (Capital Gain) được thực hiện khi:",
    options: ["A. Bạn mua cổ phiếu", "B. Bạn bán tài sản với giá cao hơn giá mua", "C. Doanh nghiệp chia cổ tức", "D. Bạn vay tiền từ ngân hàng"],
    answer: 1
  },
  {
    id: 220,
    question: "Tại sao nên hiểu về các loại phí đầu tư?",
    options: ["A. Vì phí là nguồn thu duy nhất của môi giới", "B. Vì phí trực tiếp bào mòn lợi nhuận đầu tư của bạn", "C. Vì phí khiến bạn trông chuyên nghiệp hơn", "D. Vì phí giúp bạn tránh được sự kiểm tra của thuế"],
    answer: 1
  },
  {
    id: 221,
    question: "Khái niệm 'Định giá cổ phiếu' (Stock valuation) giúp nhà đầu tư:",
    options: ["A. Quyết định giá bán ra mong muốn", "B. Xác định cổ phiếu có đang bị định giá thấp hay cao so với giá trị thực", "C. Tăng số lượng cổ phiếu sở hữu", "D. Giảm phí giao dịch"],
    answer: 1
  },
  {
    id: 222,
    question: "Điều gì xảy ra khi bạn không có kế hoạch tài chính?",
    options: ["A. Bạn sẽ tiết kiệm được nhiều hơn", "B. Dễ rơi vào chi tiêu cảm tính và khó đạt mục tiêu tài chính", "C. Bạn sẽ giàu hơn nhanh chóng", "D. Tài chính của bạn sẽ tự động cân bằng"],
    answer: 1
  },
  {
    id: 223,
    question: "Khái niệm 'Liquidity' (Thanh khoản) tốt nghĩa là gì?",
    options: ["A. Cần nhiều thời gian để chuyển thành tiền mặt", "B. Dễ dàng chuyển đổi tài sản thành tiền mặt mà không ảnh hưởng lớn tới giá", "C. Giá trị tài sản luôn tăng", "D. Tài sản đó không thể bán được"],
    answer: 1
  },
  {
    id: 224,
    question: "Tầm quan trọng của việc hiểu về Lãi suất đơn và Lãi suất kép?",
    options: ["A. Lãi suất đơn luôn tốt hơn", "B. Lãi suất kép tạo ra tác động lũy thừa cho khoản đầu tư dài hạn", "C. Chỉ ngân hàng mới cần hiểu", "D. Lãi suất không quan trọng"],
    answer: 1
  },
  {
    id: 225,
    question: "Tại sao không nên để toàn bộ tài sản vào một loại hình đầu tư?",
    options: ["A. Vì lãi ít hơn", "B. Vì tạo rủi ro tập trung cao", "C. Vì khó quản lý", "D. Vì luật pháp cấm"],
    answer: 1
  },
  {
    id: 226,
    question: "Chỉ số EPS tăng trưởng cho thấy điều gì về doanh nghiệp?",
    options: ["A. Doanh nghiệp đang mở rộng quy mô", "B. Lợi nhuận trên mỗi cổ phiếu đang cải thiện", "C. Doanh nghiệp đang nợ ít đi", "D. Doanh nghiệp sắp phá sản"],
    answer: 1
  },
  {
    id: 227,
    question: "Khái niệm 'Tín dụng đen' thường có đặc điểm gì?",
    options: ["A. Lãi suất thấp, hợp đồng rõ ràng", "B. Lãi suất rất cao, thủ tục đơn giản nhưng rủi ro lớn", "C. Được nhà nước bảo trợ", "D. Không bao giờ đòi nợ"],
    answer: 1
  },
  {
    id: 228,
    question: "Bạn quyết định không mua đồ hiệu để dành tiền đầu tư. Đây là ví dụ về?",
    options: ["A. Hoãn sự hài lòng (Delayed gratification)", "B. Tiêu pha quá mức", "C. Sự lãng phí", "D. Làm giàu không khó"],
    answer: 0
  },
  {
    id: 229,
    question: "Khái niệm 'Bong bóng tài sản' xảy ra khi:",
    options: ["A. Giá tài sản tăng cao vượt xa giá trị thực tế do tâm lý đầu cơ", "B. Giá tài sản luôn ổn định", "C. Giá tài sản giảm liên tục", "D. Nhà nước cấm giao dịch"],
    answer: 0
  },
  {
    id: 230,
    question: "Mục đích của việc lập báo cáo tài chính cá nhân là gì?",
    options: ["A. Khoe với bạn bè", "B. Nắm rõ bức tranh tài chính, thu nhập, chi tiêu và tài sản", "C. Để nộp thuế cho vui", "D. Chỉ để ghi chép cho đủ thủ tục"],
    answer: 1
  },
  {
    id: 231,
    question: "Chỉ số ROE (Return on Equity) phản ánh điều gì?",
    options: ["A. Hiệu quả sử dụng vốn chủ sở hữu", "B. Tỷ lệ nợ trên vốn", "C. Tốc độ tăng trưởng doanh thu", "D. Mức độ cổ tức trả cho cổ đông"],
    answer: 0
  },
  {
    id: 232,
    question: "Khi nền kinh tế suy thoái, các cổ phiếu ngành nào thường được coi là 'phòng thủ' (Defensive Stocks)?",
    options: ["A. Ngành công nghệ cao và xa xỉ phẩm", "B. Ngành thực phẩm, y tế, tiện ích", "C. Ngành bất động sản", "D. Ngành du lịch"],
    answer: 1
  },
  {
    id: 233,
    question: "Khái niệm 'Intrinsic Value' (Giá trị nội tại) là gì?",
    options: ["A. Giá cổ phiếu trên thị trường", "B. Giá trị thực tế của một tài sản dựa trên phân tích cơ bản", "C. Giá trị sổ sách của tài sản", "D. Giá trị kỳ vọng của nhà đầu tư"],
    answer: 1
  },
  {
    id: 234,
    question: "Tại sao nên có danh mục đầu tư đa dạng?",
    options: ["A. Để kiếm càng nhiều tiền càng tốt trong thời gian ngắn", "B. Để phân tán rủi ro khi một tài sản giảm giá", "C. Để không phải trả thuế", "D. Vì làm danh mục đẹp hơn"],
    answer: 1
  },
  {
    id: 235,
    question: "Trong quản lý tài chính cá nhân, 'Ngân sách' có vai trò gì?",
    options: ["A. Công cụ để chi tiêu nhiều hơn", "B. Kế hoạch xác định cách sử dụng thu nhập sao cho hiệu quả", "C. Không có vai trò gì quan trọng", "D. Công cụ để vay tiền"],
    answer: 1
  },
  {
    id: 236,
    question: "Số dư tài khoản an toàn nên để ở đâu để thanh khoản tốt nhất?",
    options: ["A. Đầu tư vào bất động sản", "B. Gửi tiết kiệm không kỳ hạn hoặc tài khoản thanh toán", "C. Mua vàng", "D. Cho vay lấy lãi"],
    answer: 1
  },
  {
    id: 237,
    question: "Khi đầu tư cổ phiếu, 'Cổ tức' là gì?",
    options: ["A. Phần lợi nhuận sau thuế được chia cho cổ đông", "B. Phí môi giới chứng khoán", "C. Giá cổ phiếu tăng thêm", "D. Một khoản vay từ công ty"],
    answer: 0
  },
  {
    id: 238,
    question: "Hệ số nợ trên vốn chủ sở hữu (Debt-to-Equity Ratio) cao cho thấy điều gì?",
    options: ["A. Doanh nghiệp đang thừa vốn tự có", "B. Doanh nghiệp sử dụng nợ vay nhiều để tài trợ kinh doanh", "C. Doanh nghiệp tăng trưởng mạnh", "D. Doanh nghiệp không có nợ"],
    answer: 1
  },
  {
    id: 239,
    question: "Khái niệm 'Time Value of Money' (Giá trị tiền tệ theo thời gian) có ý nghĩa gì?",
    options: ["A. Tiền trong tương lai có giá trị cao hơn tiền hiện tại", "B. Tiền ở hiện tại có giá trị cao hơn số tiền tương ứng trong tương lai vì tiềm năng sinh lời", "C. Tiền luôn giữ nguyên giá trị", "D. Thời gian không làm thay đổi giá trị tiền"],
    answer: 1
  },
  {
    id: 240,
    question: "Khi mua vàng, rủi ro chính thường gặp là gì?",
    options: ["A. Vàng thường xuyên mất giá", "B. Giá vàng biến động khó lường theo thị trường thế giới", "C. Vàng không thể bán được", "D. Chính phủ cấm giữ vàng"],
    answer: 1
  },
  {
    id: 241,
    question: "Khái niệm 'Fixed Income' (Thu nhập cố định) thường dùng để nói về sản phẩm nào?",
    options: ["A. Cổ phiếu", "B. Trái phiếu và tiền gửi ngân hàng", "C. Bất động sản", "D. Hàng hóa"],
    answer: 1
  },
  {
    id: 242,
    question: "Bạn dành thời gian nghiên cứu kiến thức tài chính. Đây là khoản đầu tư vào gì?",
    options: ["A. Tiêu sản", "B. Vốn con người (Human capital)", "C. Chi phí không cần thiết", "D. Chỉ là giải trí"],
    answer: 1
  },
  {
    id: 243,
    question: "Tỷ lệ P/E cao có thể gợi ý điều gì?",
    options: ["A. Nhà đầu tư đang trả giá cao cho kỳ vọng tăng trưởng tương lai", "B. Cổ phiếu rất rẻ", "C. Doanh nghiệp đang nợ nần", "D. Cổ phiếu không đáng mua"],
    answer: 0
  },
  {
    id: 244,
    question: "Khái niệm 'Thị trường sơ cấp' là nơi:",
    options: ["A. Cổ phiếu được giao dịch giữa các nhà đầu tư", "B. Doanh nghiệp phát hành cổ phiếu mới để huy động vốn", "C. Nơi mua bán hàng hóa tiêu dùng", "D. Không có hoạt động gì cả"],
    answer: 1
  },
  {
    id: 245,
    question: "Việc theo dõi chi tiêu giúp cá nhân điều gì?",
    options: ["A. Luôn cảm thấy ức chế", "B. Nhận diện các khoản chi lãng phí và điều chỉnh để đạt mục tiêu", "C. Tiết kiệm được 100% thu nhập", "D. Làm giàu sau 1 tháng"],
    answer: 1
  },
  {
    id: 246,
    question: "Trong tài chính, 'Lãi suất danh nghĩa' là gì?",
    options: ["A. Lãi suất chưa điều chỉnh theo lạm phát", "B. Lãi suất đã trừ đi lạm phát", "C. Lãi suất ưu đãi nhất", "D. Lãi suất được ngân hàng tặng"],
    answer: 0
  },
  {
    id: 247,
    question: "Dòng tiền dương (Positive Cash Flow) là khi:",
    options: ["A. Tiền thu vào > Tiền chi ra", "B. Tiền chi ra > Tiền thu vào", "C. Tiền bằng 0", "D. Lợi nhuận bằng 0"],
    answer: 0
  },
  {
    id: 248,
    question: "Số tiền 100 triệu mỗi năm sau 20 năm, lãi 5%, bằng bao nhiêu?",
    options: ["A. 1 tỷ", "B. 3,3 tỷ", "C. 2 tỷ", "D. 5 tỷ"],
    answer: 1
  },
  {
    id: 249,
    question: "Điểm tín dụng (Credit Score) dùng để làm gì?",
    options: ["A. Để khoe thành tích", "B. Đánh giá uy tín vay mượn của cá nhân", "C. Để được tặng quà", "D. Không có tác dụng gì"],
    answer: 1
  },
  {
    id: 250,
    question: "Tầm quan trọng của việc hiểu các chiến lược đầu tư là gì?",
    options: ["A. Để thắng trong mọi giao dịch", "B. Để xây dựng danh mục phù hợp với mục tiêu và khả năng chịu rủi ro", "C. Để không bao giờ mất tiền", "D. Chỉ để nói chuyện với các chuyên gia"],
    answer: 1
  },
  {
    id: 251,
    question: "Tỷ lệ nợ trên thu nhập (Debt-to-Income Ratio) được tính như thế nào?",
    options: ["A. Tổng nợ hàng tháng / Tổng thu nhập hàng tháng", "B. Tổng thu nhập / Tổng nợ", "C. Nợ / Tài sản", "D. Thu nhập / Chi phí"],
    answer: 0
  },
  {
    id: 252,
    question: "Tại sao nên hiểu về các loại thuế khi đầu tư?",
    options: ["A. Để đóng nhiều thuế hơn", "B. Để tối ưu hóa lợi nhuận sau thuế", "C. Vì không quan trọng", "D. Chỉ để mất thời gian"],
    answer: 1
  },
  {
    id: 253,
    question: "Khái niệm 'Fixed-income security' có ý nghĩa gì?",
    options: ["A. Một khoản đầu tư luôn tăng giá", "B. Một tài sản hứa hẹn mức thu nhập cố định định kỳ", "C. Một loại cổ phiếu rủi ro cao", "D. Một loại tài sản không bao giờ có thể bán được"],
    answer: 1
  },
  {
    id: 254,
    question: "Lợi ích của việc bắt đầu đầu tư sớm là gì?",
    options: ["A. Tận dụng tối đa sức mạnh của lãi kép", "B. Kiếm tiền nhanh chóng chỉ trong 1 tuần", "C. Trốn được toàn bộ rủi ro", "D. Không cần quan tâm tới kiến thức tài chính"],
    answer: 0
  },
  {
    id: 255,
    question: "Trong đầu tư, 'Rủi ro hệ thống' (Systematic risk) là gì?",
    options: ["A. Rủi ro chỉ có ở một công ty", "B. Rủi ro gây ra bởi các yếu tố ảnh hưởng tới toàn bộ thị trường", "C. Rủi ro của riêng bạn", "D. Rủi ro từ nhà cung cấp"],
    answer: 1
  },
  {
    id: 256,
    question: "Khái niệm 'Dividend Yield' (Tỷ suất cổ tức) là gì?",
    options: ["A. Tỷ lệ cổ tức chia trên giá thị trường của cổ phiếu", "B. Tổng cổ tức nhận được trong 1 năm", "C. Giá tăng trưởng của cổ phiếu", "D. Phí môi giới nhận được"],
    answer: 0
  },
  {
    id: 257,
    question: "Điều gì xảy ra với các khoản tiền gửi tiết kiệm khi lạm phát cao nhưng lãi suất ngân hàng thấp?",
    options: ["A. Bạn giàu lên", "B. Sức mua của số tiền tiết kiệm bị bào mòn", "C. Tiền tăng giá trị", "D. Không có ảnh hưởng gì"],
    answer: 1
  },
  {
    id: 258,
    question: "Tại sao nên đa dạng hóa danh mục đầu tư?",
    options: ["A. Để kiếm lợi nhuận tối đa trong 1 khoản", "B. Để giảm rủi ro tổng thể bằng cách không bỏ trứng vào một giỏ", "C. Để theo kịp thị trường", "D. Để quản lý danh mục khó hơn"],
    answer: 1
  },
  {
    id: 259,
    question: "Khi bạn thanh toán hết nợ tín dụng, điều gì thường xảy ra với điểm tín dụng?",
    options: ["A. Điểm tín dụng giảm", "B. Điểm tín dụng có xu hướng cải thiện", "C. Không ảnh hưởng", "D. Ngân hàng cấm vay tiếp"],
    answer: 1
  },
  {
    id: 260,
    question: "Khái niệm 'Capital Allocation' (Phân bổ vốn) có nghĩa là gì?",
    options: ["A. Quyết định xem tiền được chi cho việc gì để tối đa giá trị", "B. Chỉ là tiêu tiền", "C. Không bao giờ quan tâm đến tiền", "D. Cách làm mất tiền nhanh nhất"],
    answer: 0
  },
  {
    id: 261,
    question: "Chứng khoán phái sinh (Derivatives) là gì?",
    options: ["A. Một công cụ có giá trị dựa trên một tài sản cơ sở", "B. Một loại cổ phiếu của công ty lớn", "C. Một loại tiền tệ quốc tế", "D. Đất đai"],
    answer: 0
  },
  {
    id: 262,
    question: "Khi đầu tư quốc tế, bạn chịu thêm rủi ro nào?",
    options: ["A. Rủi ro tỷ giá", "B. Rủi ro thời tiết", "C. Không chịu rủi ro nào", "D. Rủi ro cháy nhà"],
    answer: 0
  },
  {
    id: 263,
    question: "Tại sao nên có bảo hiểm sức khỏe?",
    options: ["A. Để đi khám cho vui", "B. Để bảo vệ tài chính trước các biến cố về y tế bất ngờ", "C. Để được ưu tiên khi mua sắm", "D. Không cần thiết"],
    answer: 1
  },
  {
    id: 264,
    question: "Nợ tốt (Good debt) được hiểu là:",
    options: ["A. Nợ dùng cho các mục tiêu đầu tư tạo ra giá trị tương lai", "B. Nợ mua đồ tiêu dùng xa xỉ", "C. Nợ vay mượn người thân", "D. Không có nợ tốt"],
    answer: 0
  },
  {
    id: 265,
    question: "Doanh nghiệp niêm yết trên sàn chứng khoán phải tuân thủ điều gì?",
    options: ["A. Không cần công bố gì cả", "B. Công bố thông tin định kỳ và minh bạch cho nhà đầu tư", "C. Chỉ công bố cho cổ đông lớn", "D. Không bị kiểm soát"],
    answer: 1
  },
  {
    id: 266,
    question: "Thu nhập bị động (Passive income) đến từ đâu?",
    options: ["A. Làm thuê toàn thời gian", "B. Các nguồn thu không yêu cầu sự tham gia tích cực thường xuyên (đầu tư, tiền thuê, cổ tức)", "C. Đi làm thêm ngoài giờ", "D. Bán tài sản cá nhân"],
    answer: 1
  },
  {
    id: 267,
    question: "Khái niệm 'Bong bóng tài chính' thường kết thúc bằng:",
    options: ["A. Sự sụp đổ của giá cả", "B. Sự tăng trưởng mạnh thêm", "C. Không ảnh hưởng gì", "D. Doanh nghiệp lãi lớn"],
    answer: 0
  },
  {
    id: 268,
    question: "Khi bạn gửi tiền tiết kiệm tại ngân hàng, tiền của bạn được bảo vệ bởi?",
    options: ["A. Công ty môi giới", "B. Bảo hiểm tiền gửi (theo hạn mức quy định)", "C. Nhà đầu tư khác", "D. Không ai bảo vệ"],
    answer: 1
  },
  {
    id: 269,
    question: "Ý nghĩa của việc đọc báo cáo tài chính doanh nghiệp?",
    options: ["A. Để hiểu tình hình sức khỏe và hiệu quả kinh doanh của công ty", "B. Để đọc cho hay", "C. Không có ý nghĩa gì", "D. Để tránh bị phạt"],
    answer: 0
  },
  {
    id: 270,
    question: "Đâu là bước đầu tiên của hành trình tự do tài chính?",
    options: ["A. Đầu tư mạo hiểm", "B. Kiểm soát chi tiêu và bắt đầu tiết kiệm/đầu tư", "C. Mua xe sang", "D. Không cần bắt đầu"],
    answer: 1
  },
  {
    id: 251,
    question: "Tỷ lệ nợ trên thu nhập (Debt-to-Income Ratio) được tính như thế nào?",
    options: ["A. Tổng nợ hàng tháng / Tổng thu nhập hàng tháng", "B. Tổng thu nhập / Tổng nợ", "C. Nợ / Tài sản", "D. Thu nhập / Chi phí"],
    answer: 0
  },
  {
    id: 252,
    question: "Tại sao nên hiểu về các loại thuế khi đầu tư?",
    options: ["A. Để đóng nhiều thuế hơn", "B. Để tối ưu hóa lợi nhuận sau thuế", "C. Vì không quan trọng", "D. Chỉ để mất thời gian"],
    answer: 1
  },
  {
    id: 253,
    question: "Khái niệm 'Fixed-income security' có ý nghĩa gì?",
    options: ["A. Một khoản đầu tư luôn tăng giá", "B. Một tài sản hứa hẹn mức thu nhập cố định định kỳ", "C. Một loại cổ phiếu rủi ro cao", "D. Một loại tài sản không bao giờ có thể bán được"],
    answer: 1
  },
  {
    id: 254,
    question: "Lợi ích của việc bắt đầu đầu tư sớm là gì?",
    options: ["A. Tận dụng tối đa sức mạnh của lãi kép", "B. Kiếm tiền nhanh chóng chỉ trong 1 tuần", "C. Trốn được toàn bộ rủi ro", "D. Không cần quan tâm tới kiến thức tài chính"],
    answer: 0
  },
  {
    id: 255,
    question: "Trong đầu tư, 'Rủi ro hệ thống' (Systematic risk) là gì?",
    options: ["A. Rủi ro chỉ có ở một công ty", "B. Rủi ro gây ra bởi các yếu tố ảnh hưởng tới toàn bộ thị trường", "C. Rủi ro của riêng bạn", "D. Rủi ro từ nhà cung cấp"],
    answer: 1
  },
  {
    id: 256,
    question: "Khái niệm 'Dividend Yield' (Tỷ suất cổ tức) là gì?",
    options: ["A. Tỷ lệ cổ tức chia trên giá thị trường của cổ phiếu", "B. Tổng cổ tức nhận được trong 1 năm", "C. Giá tăng trưởng của cổ phiếu", "D. Phí môi giới nhận được"],
    answer: 0
  },
  {
    id: 257,
    question: "Điều gì xảy ra với các khoản tiền gửi tiết kiệm khi lạm phát cao nhưng lãi suất ngân hàng thấp?",
    options: ["A. Bạn giàu lên", "B. Sức mua của số tiền tiết kiệm bị bào mòn", "C. Tiền tăng giá trị", "D. Không có ảnh hưởng gì"],
    answer: 1
  },
  {
    id: 258,
    question: "Tại sao nên đa dạng hóa danh mục đầu tư?",
    options: ["A. Để kiếm lợi nhuận tối đa trong 1 khoản", "B. Để giảm rủi ro tổng thể bằng cách không bỏ trứng vào một giỏ", "C. Để theo kịp thị trường", "D. Để quản lý danh mục khó hơn"],
    answer: 1
  },
  {
    id: 259,
    question: "Khi bạn thanh toán hết nợ tín dụng, điều gì thường xảy ra với điểm tín dụng?",
    options: ["A. Điểm tín dụng giảm", "B. Điểm tín dụng có xu hướng cải thiện", "C. Không ảnh hưởng", "D. Ngân hàng cấm vay tiếp"],
    answer: 1
  },
  {
    id: 260,
    question: "Khái niệm 'Capital Allocation' (Phân bổ vốn) có nghĩa là gì?",
    options: ["A. Quyết định xem tiền được chi cho việc gì để tối đa giá trị", "B. Chỉ là tiêu tiền", "C. Không bao giờ quan tâm đến tiền", "D. Cách làm mất tiền nhanh nhất"],
    answer: 0
  },
  {
    id: 261,
    question: "Chứng khoán phái sinh (Derivatives) là gì?",
    options: ["A. Một công cụ có giá trị dựa trên một tài sản cơ sở", "B. Một loại cổ phiếu của công ty lớn", "C. Một loại tiền tệ quốc tế", "D. Đất đai"],
    answer: 0
  },
  {
    id: 262,
    question: "Khi đầu tư quốc tế, bạn chịu thêm rủi ro nào?",
    options: ["A. Rủi ro tỷ giá", "B. Rủi ro thời tiết", "C. Không chịu rủi ro nào", "D. Rủi ro cháy nhà"],
    answer: 0
  },
  {
    id: 263,
    question: "Tại sao nên có bảo hiểm sức khỏe?",
    options: ["A. Để đi khám cho vui", "B. Để bảo vệ tài chính trước các biến cố về y tế bất ngờ", "C. Để được ưu tiên khi mua sắm", "D. Không cần thiết"],
    answer: 1
  },
  {
    id: 264,
    question: "Nợ tốt (Good debt) được hiểu là:",
    options: ["A. Nợ dùng cho các mục tiêu đầu tư tạo ra giá trị tương lai", "B. Nợ mua đồ tiêu dùng xa xỉ", "C. Nợ vay mượn người thân", "D. Không có nợ tốt"],
    answer: 0
  },
  {
    id: 265,
    question: "Doanh nghiệp niêm yết trên sàn chứng khoán phải tuân thủ điều gì?",
    options: ["A. Không cần công bố gì cả", "B. Công bố thông tin định kỳ và minh bạch cho nhà đầu tư", "C. Chỉ công bố cho cổ đông lớn", "D. Không bị kiểm soát"],
    answer: 1
  },
  {
    id: 266,
    question: "Thu nhập bị động (Passive income) đến từ đâu?",
    options: ["A. Làm thuê toàn thời gian", "B. Các nguồn thu không yêu cầu sự tham gia tích cực thường xuyên (đầu tư, tiền thuê, cổ tức)", "C. Đi làm thêm ngoài giờ", "D. Bán tài sản cá nhân"],
    answer: 1
  },
  {
    id: 267,
    question: "Khái niệm 'Bong bóng tài chính' thường kết thúc bằng:",
    options: ["A. Sự sụp đổ của giá cả", "B. Sự tăng trưởng mạnh thêm", "C. Không ảnh hưởng gì", "D. Doanh nghiệp lãi lớn"],
    answer: 0
  },
  {
    id: 268,
    question: "Khi bạn gửi tiền tiết kiệm tại ngân hàng, tiền của bạn được bảo vệ bởi?",
    options: ["A. Công ty môi giới", "B. Bảo hiểm tiền gửi (theo hạn mức quy định)", "C. Nhà đầu tư khác", "D. Không ai bảo vệ"],
    answer: 1
  },
  {
    id: 269,
    question: "Ý nghĩa của việc đọc báo cáo tài chính doanh nghiệp?",
    options: ["A. Để hiểu tình hình sức khỏe và hiệu quả kinh doanh của công ty", "B. Để đọc cho hay", "C. Không có ý nghĩa gì", "D. Để tránh bị phạt"],
    answer: 0
  },
  {
    id: 270,
    question: "Đâu là bước đầu tiên của hành trình tự do tài chính?",
    options: ["A. Đầu tư mạo hiểm", "B. Kiểm soát chi tiêu và bắt đầu tiết kiệm/đầu tư", "C. Mua xe sang", "D. Không cần bắt đầu"],
    answer: 1
  },
  {
    id: 271,
    question: "Chỉ số nợ trên vốn (Debt-to-Equity) được dùng để làm gì?",
    options: ["A. Đo lường sức mạnh tài chính", "B. Đánh giá mức độ sử dụng đòn bẩy tài chính của doanh nghiệp", "C. Đo lường khả năng sinh lời", "D. Đo lường hiệu quả quản lý"],
    answer: 1
  },
  {
    id: 272,
    question: "Tại sao nên hiểu về các loại rủi ro khi đầu tư?",
    options: ["A. Để biết cách tránh mất tiền", "B. Để biết cách quản lý và giảm thiểu khả năng thua lỗ", "C. Vì là quy định bắt buộc", "D. Để theo kịp thị trường"],
    answer: 1
  },
  {
    id: 273,
    question: "Khái niệm 'High-yield bond' (Trái phiếu lợi suất cao) thường đi kèm với:",
    options: ["A. Rủi ro cao", "B. Rủi ro thấp", "C. Không có rủi ro", "D. Lợi suất thấp"],
    answer: 0
  },
  {
    id: 274,
    question: "Lợi ích lớn nhất của việc đầu tư dài hạn là?",
    options: ["A. Tận dụng tối đa lãi kép", "B. Kiếm tiền trong ngày", "C. Không cần nghiên cứu", "D. Giảm số lượng cổ phiếu"],
    answer: 0
  },
  {
    id: 275,
    question: "Trong đầu tư, P/E ratio là gì?",
    options: ["A. Tỷ lệ giá cổ phiếu trên lợi nhuận trên mỗi cổ phiếu", "B. Tỷ lệ doanh thu trên vốn", "C. Tỷ lệ nợ trên doanh thu", "D. Tỷ lệ tiền mặt trên tài sản"],
    answer: 0
  },
  {
    id: 276,
    question: "Khi bạn thanh toán hết nợ tín dụng, điểm tín dụng thường:",
    options: ["A. Giảm", "B. Cải thiện", "C. Giữ nguyên", "D. Không có ý nghĩa"],
    answer: 1
  },
  {
    id: 277,
    question: "Điều gì xảy ra với giá cổ phiếu khi doanh nghiệp công bố kết quả kinh doanh tốt hơn kỳ vọng?",
    options: ["A. Giá cổ phiếu thường có xu hướng tăng", "B. Giá giảm", "C. Không biến động", "D. Luôn luôn giảm"],
    answer: 0
  },
  {
    id: 278,
    question: "Khái niệm 'Margin' trong đầu tư dùng để làm gì?",
    options: ["A. Vay số tiền từ sàn để tăng quy mô giao dịch", "B. Tự đầu tư hoàn toàn bằng vốn tự có", "C. Để tích lũy tiền mặt", "D. Để nộp thuế"],
    answer: 0
  },
  {
    id: 279,
    question: "Tài sản nào sau đây thường có tính thanh khoản cao nhất?",
    options: ["A. Tiền mặt", "B. Bất động sản", "C. Cổ phiếu chưa niêm yết", "D. Máy móc thiết bị"],
    answer: 0
  },
  {
    id: 280,
    question: "Việc thiết lập kế hoạch tài chính giúp bạn:",
    options: ["A. Tiêu xài thoải mái bất chấp", "B. Đạt được các mục tiêu tài chính bằng cách quản lý thu chi hợp lý", "C. Không bao giờ cần lo lắng về tiền", "D. Chỉ để ghi chép cho vui"],
    answer: 1
  },
  {
    id: 281,
    question: "Khái niệm 'Bear Market' kéo dài trong bao lâu thường được coi là suy thoái?",
    options: ["A. Không có thời gian cố định, miễn giảm đủ sâu", "B. Luôn là 1 năm", "C. 6 tháng", "D. 1 ngày"],
    answer: 0
  },
  {
    id: 282,
    question: "Sự khác biệt giữa Chứng chỉ quỹ và Cổ phiếu là:",
    options: ["A. Chứng chỉ quỹ là danh mục tài sản, Cổ phiếu là quyền sở hữu 1 công ty", "B. Không có sự khác biệt", "C. Cổ phiếu an toàn hơn", "D. Chứng chỉ quỹ chắc chắn lãi hơn"],
    answer: 0
  },
  {
    id: 283,
    question: "Đâu là yếu tố quan trọng để lập kế hoạch nghỉ hưu?",
    options: ["A. Sự đầu tư đều đặn và thời gian", "B. Số tiền đầu tư lần cuối", "C. Việc mua sắm xa xỉ", "D. Không cần kế hoạch"],
    answer: 0
  },
  {
    id: 284,
    question: "Tại sao nên cân nhắc lạm phát khi tính toán lợi nhuận đầu tư?",
    options: ["A. Để biết lợi nhuận thực tế (sức mua sau khi trừ lạm phát)", "B. Vì lạm phát làm tăng tiền", "C. Chỉ để làm phép tính cho phức tạp", "D. Không cần thiết"],
    answer: 0
  },
  {
    id: 285,
    question: "Khái niệm 'Passive income' tốt nhất nên dựa trên:",
    options: ["A. Nguồn thu nhập ổn định và có giá trị", "B. Cờ bạc đỏ đen", "C. Vay nợ để tiêu dùng", "D. Chỉ dựa vào may mắn"],
    answer: 0
  },
  {
    id: 286,
    question: "Mục đích của việc kiểm soát chi tiêu là:",
    options: ["A. Tối đa hóa khả năng tiết kiệm và đầu tư", "B. Để sống khắc khổ", "C. Tránh hoàn toàn các nhu cầu thiết yếu", "D. Chỉ cần quản lý thu nhập"],
    answer: 0
  },
  {
    id: 287,
    question: "Tại sao cần phải tìm hiểu kỹ doanh nghiệp trước khi mua cổ phiếu?",
    options: ["A. Vì đó là tiền của bạn và rủi ro mất vốn là thật", "B. Cho vui", "C. Để có chuyện kể với bạn bè", "D. Vì bạn thích đọc báo cáo"],
    answer: 0
  },
  {
    id: 288,
    question: "Trái phiếu chính phủ thường được coi là an toàn vì:",
    options: ["A. Được chính phủ bảo lãnh thanh toán", "B. Sinh lời cao nhất", "C. Có thể mua với giá cực rẻ", "D. Được ngân hàng thương mại tặng"],
    answer: 0
  },
  {
    id: 289,
    question: "Khi thị trường đi ngang (Side-way Market), nhà đầu tư nên:",
    options: ["A. Bình tĩnh và lựa chọn cổ phiếu giá trị", "B. HOẢNG LOẠN và bán tất cả", "C. Mua thêm bằng margin", "D. Nghỉ đầu tư vĩnh viễn"],
    answer: 0
  },
  {
    id: 290,
    question: "Kết thúc của một 'Bong bóng tài sản' luôn là:",
    options: ["A. Giá cả giảm mạnh về giá trị thực", "B. Giá tăng mãi mãi", "C. Không ảnh hưởng đến thị trường", "D. Nhà nước mua lại toàn bộ"],
    answer: 0
  },
  {
    id: 291,
    question: "Khái niệm 'Dollar-cost averaging' giúp nhà đầu tư giảm rủi ro gì?",
    options: ["A. Rủi ro về giá (market timing)", "B. Rủi ro của toàn bộ thị trường", "C. Chỉ là để tiết kiệm phí", "D. Tránh hoàn toàn biến động"],
    answer: 0
  },
  {
    id: 292,
    question: "Chỉ số tài chính nào sau đây cho biết khả năng thanh toán nợ ngắn hạn?",
    options: ["A. ROE", "B. Hệ số thanh toán hiện hành", "C. P/E", "D. Chỉ số tăng trưởng"],
    answer: 1
  },
  {
    id: 293,
    question: "Khi FED hoặc ngân hàng trung ương tăng lãi suất, giá trái phiếu thường:",
    options: ["A. Giảm", "B. Tăng", "C. Không đổi", "D. Biến động không theo quy luật"],
    answer: 0
  },
  {
    id: 294,
    question: "Tại sao nên có bảo hiểm y tế?",
    options: ["A. Để đi khám cho vui", "B. Để giảm thiểu rủi ro tài chính khi gặp các vấn đề sức khỏe bất ngờ", "C. Để được ưu tiên khi mua sắm", "D. Không cần thiết"],
    answer: 1
  },
  {
    id: 295,
    question: "Khái niệm 'Bear market' là:",
    options: ["A. Xu hướng thị trường giảm kéo dài", "B. Xu hướng thị trường tăng kéo dài", "C. Thị trường đi ngang", "D. Thị trường không có giao dịch"],
    answer: 0
  },
  {
    id: 296,
    question: "Việc đa dạng hóa danh mục đầu tư giúp giảm rủi ro gì?",
    options: ["A. Rủi ro hệ thống", "B. Rủi ro phi hệ thống", "C. Cả hai", "D. Không giảm được rủi ro"],
    answer: 1
  },
  {
    id: 297,
    question: "Chỉ số ROI thường dùng để làm gì?",
    options: ["A. Đo lường doanh thu", "B. Đo lường tốc độ tăng trưởng", "C. Đo lường hiệu quả của một khoản đầu tư", "D. Đo lường nợ"],
    answer: 2
  },
  {
    id: 298,
    question: "Trong quản lý tài chính cá nhân, 'Dòng tiền dương' là:",
    options: ["A. Thu nhập lớn hơn chi tiêu", "B. Chi tiêu lớn hơn thu nhập", "C. Thu nhập bằng chi tiêu", "D. Tiền mặt bằng 0"],
    answer: 0
  },
  {
    id: 299,
    question: "Tại sao lãi kép lại được coi là kỳ quan thứ 8?",
    options: ["A. Vì chỉ ngân hàng mới hiểu", "B. Vì sức mạnh tăng trưởng lũy thừa theo thời gian", "C. Vì giúp tránh được thuế", "D. Vì cách tính rất khó"],
    answer: 1
  },
  {
    id: 300,
    question: "Khái niệm 'Intrinsic value' của cổ phiếu là:",
    options: ["A. Giá trị thực tế của công ty", "B. Giá thị trường", "C. Giá trị sổ sách", "D. Giá mà nhà đầu tư mong muốn"],
    answer: 0
  },
  {
    id: 301,
    question: "Khi lãi suất gửi tiết kiệm tăng, giá cổ phiếu thường có xu hướng:",
    options: ["A. Tăng", "B. Giảm", "C. Không thay đổi", "D. Tăng mạnh"],
    answer: 1
  },
  {
    id: 302,
    question: "Điểm tín dụng (Credit score) ảnh hưởng trực tiếp đến:",
    options: ["A. Khả năng vay vốn và lãi suất vay", "B. Tiền lương hàng tháng", "C. Khả năng mua nhà", "D. Chỉ số chứng khoán"],
    answer: 0
  },
  {
    id: 303,
    question: "Tại sao nên theo dõi chi tiêu cá nhân?",
    options: ["A. Để cảm thấy áp lực", "B. Để nhận biết các khoản chi không cần thiết và tối ưu hóa ngân sách", "C. Vì là sở thích", "D. Không cần thiết"],
    answer: 1
  },
  {
    id: 304,
    question: "Khái niệm 'Blue-chip' trong chứng khoán là:",
    options: ["A. Cổ phiếu những công ty hàng đầu, uy tín", "B. Cổ phiếu công ty nhỏ", "C. Cổ phiếu công ty sắp phá sản", "D. Không phải cổ phiếu"],
    answer: 0
  },
  {
    id: 305,
    question: "Khi đầu tư vào vàng, lợi thế chính của nó là:",
    options: ["A. Sinh lời cao đột biến", "B. Khả năng trú ẩn và chống mất giá của tiền tệ", "C. Dễ sử dụng", "D. Không có rủi ro"],
    answer: 1
  },
  {
    id: 306,
    question: "Mục đích của việc kiểm soát chi tiêu là:",
    options: ["A. Để tối đa hóa khả năng tiết kiệm và đầu tư", "B. Để sống khắc khổ", "C. Để mua được xe sang", "D. Để quản lý thu nhập"],
    answer: 0
  },
  {
    id: 307,
    question: "Chỉ số nợ trên vốn chủ sở hữu (Debt-to-Equity) cao nghĩa là:",
    options: ["A. Doanh nghiệp nợ ít", "B. Doanh nghiệp nợ vay nhiều hơn vốn chủ", "C. Doanh nghiệp lãi lớn", "D. Doanh nghiệp không có nợ"],
    answer: 1
  },
  {
    id: 308,
    question: "Khái niệm 'Cổ tức' là:",
    options: ["A. Phần lợi nhuận được chia cho cổ đông", "B. Khoản vay của công ty", "C. Giá tăng trưởng", "D. Phí quản lý"],
    answer: 0
  },
  {
    id: 309,
    question: "Tại sao nhà đầu tư nên đọc báo cáo tài chính?",
    options: ["A. Vì đó là sở thích", "B. Đánh giá sức khỏe tài chính và tiềm năng của doanh nghiệp", "C. Để có chuyện kể", "D. Không cần thiết"],
    answer: 1
  },
  {
    id: 310,
    question: "Bước đầu tiên trong kỷ luật đầu tư là:",
    options: ["A. Xác định mục tiêu và kế hoạch rõ ràng", "B. Mua liền cổ phiếu", "C. Vay nợ để đầu tư", "D. Không cần bước nào"],
    answer: 0
  },
  {
    id: 311,
    question: "Tỷ lệ P/E được sử dụng để làm gì?",
    options: ["A. Đánh giá tính đắt/rẻ của cổ phiếu so với lợi nhuận", "B. Đo lường tốc độ tăng trưởng doanh thu", "C. Đo lường khả năng thanh toán nợ", "D. Đo lường hiệu quả quản lý"],
    answer: 0
  },
  {
    id: 312,
    question: "Tại sao nên hiểu về các loại rủi ro khi đầu tư?",
    options: ["A. Để biết cách quản lý rủi ro và giảm thiểu thua lỗ", "B. Để tránh hoàn toàn rủi ro", "C. Vì là sở thích", "D. Không cần thiết"],
    answer: 0
  },
  {
    id: 313,
    question: "Khái niệm 'High-yield bond' có đặc điểm gì?",
    options: ["A. Rủi ro cao, lợi suất cao", "B. Rủi ro thấp, lợi suất thấp", "C. Không có rủi ro", "D. Chỉ có công ty lớn phát hành"],
    answer: 0
  },
  {
    id: 314,
    question: "Ưu điểm của đầu tư dài hạn là gì?",
    options: ["A. Tận dụng lãi kép, giảm biến động ngắn hạn", "B. Kiếm tiền nhanh chóng", "C. Không cần nghiên cứu", "D. Giảm số lượng tài sản"],
    answer: 0
  },
  {
    id: 315,
    question: "Hệ số thanh toán hiện hành (Current Ratio) là gì?",
    options: ["A. Tài sản ngắn hạn / Nợ ngắn hạn", "B. Tổng tài sản / Tổng nợ", "C. Lợi nhuận / Doanh thu", "D. Vốn chủ sở hữu / Nợ"],
    answer: 0
  },
  {
    id: 316,
    question: "Khi bạn thanh toán hết nợ tín dụng, điểm tín dụng thường:",
    options: ["A. Cải thiện", "B. Giảm", "C. Không đổi", "D. Chỉ có ngân hàng mới biết"],
    answer: 0
  },
  {
    id: 317,
    question: "Kết quả kinh doanh tốt hơn kỳ vọng thường làm giá cổ phiếu:",
    options: ["A. Tăng", "B. Giảm", "C. Đi ngang", "D. Không thay đổi"],
    answer: 0
  },
  {
    id: 318,
    question: "Khái niệm 'Margin' trong chứng khoán là:",
    options: ["A. Vay tiền từ môi giới để đầu tư", "B. Đầu tư toàn bộ bằng tiền mặt", "C. Gửi tiền tiết kiệm", "D. Không liên quan đến vay mượn"],
    answer: 0
  },
  {
    id: 319,
    question: "Tài sản nào có tính thanh khoản cao nhất?",
    options: ["A. Tiền mặt", "B. Nhà đất", "C. Vàng miếng chưa bán", "D. Thiết bị"],
    answer: 0
  },
  {
    id: 320,
    question: "Kế hoạch tài chính giúp bạn:",
    options: ["A. Sử dụng tiền hợp lý để đạt mục tiêu", "B. Tiêu tiền theo cảm xúc", "C. Không bị kiểm soát", "D. Chỉ cần thu nhập cao"],
    answer: 0
  },
  {
    id: 321,
    question: "Thị trường tài chính là:",
    options: ["A. Nơi phân bổ vốn", "B. Nơi sản xuất hàng hóa", "C. Nơi quản lý hành chính", "D. Không tồn tại thật"],
    answer: 0
  },
  {
    id: 322,
    question: "Rủi ro lãi suất ảnh hưởng nhiều nhất đến:",
    options: ["A. Trái phiếu dài hạn", "B. Tiền mặt", "C. Cổ phiếu penny", "D. Không ảnh hưởng"],
    answer: 0
  },
  {
    id: 323,
    question: "Đầu tư vào bất động sản cho thuê nên chú trọng vào:",
    options: ["A. Chỉ số lợi nhuận cho thuê (Rental yield)", "B. Màu sơn nhà", "C. Chỉ cần vị trí đẹp", "D. Không quan trọng"],
    answer: 0
  },
  {
    id: 324,
    question: "Tầm quan trọng của lãi kép là:",
    options: ["A. Tích lũy lũy thừa theo thời gian", "B. Chỉ dành cho người giàu", "C. Không quan trọng", "D. Rất khó tính"],
    answer: 0
  },
  {
    id: 325,
    question: "Đa dạng hóa danh mục giúp:",
    options: ["A. Giảm rủi ro phi hệ thống", "B. Rất phức tạp", "C. Không giảm rủi ro", "D. Tăng rủi ro"],
    answer: 0
  },
  {
    id: 326,
    question: "Doanh nghiệp niêm yết trên sàn có nghĩa vụ:",
    options: ["A. Công bố thông tin minh bạch", "B. Chỉ cần công bố cho sếp", "C. Không cần làm gì", "D. Không bị quản lý"],
    answer: 0
  },
  {
    id: 327,
    question: "Thu nhập bị động ví dụ như:",
    options: ["A. Lợi nhuận đầu tư, tiền thuê nhà", "B. Tiền lương hàng tháng", "C. Đi bán đồ cũ", "D. Không tồn tại"],
    answer: 0
  },
  {
    id: 328,
    question: "Khi có lạm phát, giá trị tiền mặt:",
    options: ["A. Giảm", "B. Tăng", "C. Không đổi", "D. Biến động không dự đoán được"],
    answer: 0
  },
  {
    id: 329,
    question: "Trái phiếu chính phủ thường được xem là:",
    options: ["A. An toàn cao", "B. Rủi ro cao", "C. Rất khó mua", "D. Không an toàn"],
    answer: 0
  },
  {
    id: 330,
    question: "Tầm quan trọng của việc lập ngân sách là:",
    options: ["A. Kiểm soát chi tiêu để tiết kiệm/đầu tư", "B. Hạn chế hoàn toàn chi tiêu", "C. Lãng phí thời gian", "D. Chỉ cần ghi lại"],
    answer: 0
  },
  {
    id: 331,
    question: "Tỷ lệ P/B (Price-to-Book ratio) được dùng để so sánh gì?",
    options: ["A. Giá thị trường với giá trị sổ sách", "B. Giá thị trường với doanh thu", "C. Giá với lợi nhuận", "D. Nợ với vốn"],
    answer: 0
  },
  {
    id: 332,
    question: "Tại sao nên hiểu về các loại thuế khi đầu tư?",
    options: ["A. Để tối ưu hóa lợi nhuận thực nhận", "B. Để biết cách đóng nhiều thuế", "C. Không cần hiểu", "D. Vì luật pháp bắt buộc phải biết"],
    answer: 0
  },
  {
    id: 333,
    question: "Khái niệm 'Dollar-cost averaging' giúp:",
    options: ["A. Bình quân hóa giá vốn theo thời gian", "B. Kiếm lợi nhuận cao nhất trong ngắn hạn", "C. Tránh hoàn toàn rủi ro", "D. Không cần quan tâm tới giá"],
    answer: 0
  },
  {
    id: 334,
    question: "Đâu là yếu tố ảnh hưởng mạnh đến giá trái phiếu?",
    options: ["A. Lãi suất thị trường", "B. Thời tiết", "C. Giá hàng hóa tiêu dùng", "D. Không ảnh hưởng"],
    answer: 0
  },
  {
    id: 335,
    question: "Trong quản lý tài chính cá nhân, 'Dòng tiền dương' có nghĩa là:",
    options: ["A. Thu nhập > Chi tiêu", "B. Chi tiêu > Thu nhập", "C. Thu nhập = Chi tiêu", "D. Không có tiền mặt"],
    answer: 0
  },
  {
    id: 336,
    question: "Chỉ số ROA (Return on Assets) đo lường:",
    options: ["A. Lợi nhuận sinh ra từ tổng tài sản", "B. Lợi nhuận từ vốn chủ", "C. Khả năng thanh toán", "D. Tăng trưởng doanh thu"],
    answer: 0
  },
  {
    id: 337,
    question: "Khi thị trường Bear Market, tâm lý nhà đầu tư thường:",
    options: ["A. Bi quan", "B. Lạc quan", "C. Không quan tâm", "D. Mua vào bằng mọi giá"],
    answer: 0
  },
  {
    id: 338,
    question: "Khái niệm 'Margin Call' xảy ra khi:",
    options: ["A. Tài khoản bị thua lỗ chạm mức yêu cầu ký quỹ", "B. Lãi suất ngân hàng tăng", "C. Doanh nghiệp chia cổ tức", "D. Bạn rút tiền từ tài khoản"],
    answer: 0
  },
  {
    id: 339,
    question: "Tần suất tái cân bằng danh mục đầu tư hợp lý thường dựa trên:",
    options: ["A. Mục tiêu và thời gian cụ thể", "B. Theo cảm xúc mỗi ngày", "C. Không bao giờ cần tái cân bằng", "D. Thay đổi của thời tiết"],
    answer: 0
  },
  {
    id: 340,
    question: "Ý nghĩa của việc đọc báo cáo tài chính là:",
    options: ["A. Hiểu hiệu quả và sức khỏe kinh doanh của doanh nghiệp", "B. Đọc cho vui", "C. Tránh phí giao dịch", "D. Không có ý nghĩa"],
    answer: 0
  },
  {
    id: 341,
    question: "Tại sao nên có danh mục đa dạng hóa?",
    options: ["A. Giảm rủi ro phi hệ thống", "B. Để làm danh mục ngắn gọn", "C. Tăng rủi ro", "D. Chỉ cần 1 loại cổ phiếu"],
    answer: 0
  },
  {
    id: 342,
    question: "Tỷ lệ P/E cao cho thấy:",
    options: ["A. Nhà đầu tư kỳ vọng cao vào tăng trưởng tương lai", "B. Cổ phiếu bị định giá thấp", "C. Công ty không có nợ", "D. Công ty sắp phá sản"],
    answer: 0
  },
  {
    id: 343,
    question: "Khái niệm 'Blue-chip' cổ phiếu là:",
    options: ["A. Doanh nghiệp hàng đầu, uy tín, tài chính vững", "B. Cổ phiếu penny giá thấp", "C. Cổ phiếu công nghệ mới", "D. Chỉ có giá trị khi thị trường tăng"],
    answer: 0
  },
  {
    id: 344,
    question: "Tại sao đầu tư vào chỉ số (Index fund) là một chiến lược phổ biến?",
    options: ["A. Chi phí thấp và mức độ đa dạng hóa cao", "B. Luôn thắng thị trường", "C. Không cần tiền", "D. Dễ đoán đỉnh"],
    answer: 0
  },
  {
    id: 345,
    question: "Khái niệm 'Tự do tài chính' thường được hiểu là:",
    options: ["A. Thu nhập bị động bao phủ chi phí sinh hoạt", "B. Có thật nhiều tiền mặt", "C. Không cần đi làm", "D. Không cần gửi tiết kiệm"],
    answer: 0
  },
  {
    id: 346,
    question: "Doanh nghiệp khi niêm yết trên sàn có nghĩa vụ gì về thông tin?",
    options: ["A. Công bố minh bạch định kỳ", "B. Chỉ cần công bố cho cổ đông lớn", "C. Không cần quan tâm", "D. Tùy thích"],
    answer: 0
  },
  {
    id: 347,
    question: "Tại sao cần kiểm soát chi tiêu cá nhân?",
    options: ["A. Tối ưu hóa nguồn tiền để đầu tư", "B. Sống khắc khổ", "C. Cắt giảm hết mọi nhu cầu", "D. Không cần thiết"],
    answer: 0
  },
  {
    id: 348,
    question: "Lãi kép có ý nghĩa gì lớn nhất?",
    options: ["A. Tăng trưởng lũy thừa theo thời gian", "B. Lãi đơn cộng dồn", "C. Giúp vay nợ dễ hơn", "D. Chỉ cần tính 1 lần"],
    answer: 0
  },
  {
    id: 349,
    question: "Trong tài chính, 'Lạm phát' tác động đến tiền mặt như thế nào?",
    options: ["A. Giảm sức mua", "B. Tăng giá trị", "C. Không ảnh hưởng", "D. Giúp tiền tăng lãi"],
    answer: 0
  },
  {
    id: 350,
    question: "Bước đầu tiên trong đầu tư kỷ luật là:",
    options: ["A. Xây dựng kế hoạch và mục tiêu rõ ràng", "B. Vay margin để đánh lớn", "C. Theo lời khuyên trên mạng", "D. Không cần chuẩn bị"],
    answer: 0
  },
  {
    id: 351,
    question: "Tỷ lệ P/E có ý nghĩa gì?",
    options: ["A. Giá cổ phiếu trên thu nhập mỗi cổ phiếu", "B. Tỷ lệ tăng trưởng doanh thu", "C. Tỷ lệ nợ trên vốn", "D. Không có ý nghĩa"],
    answer: 0
  },
  {
    id: 352,
    question: "Tại sao nên hiểu về các loại rủi ro?",
    options: ["A. Để quản lý và giảm thiểu khả năng thua lỗ", "B. Để trốn tránh toàn bộ rủi ro", "C. Vì là sở thích", "D. Không cần thiết"],
    answer: 0
  },
  {
    id: 353,
    question: "Khái niệm 'High-yield bond' có đặc điểm gì?",
    options: ["A. Rủi ro cao, lợi suất cao", "B. Rủi ro thấp, lợi suất thấp", "C. Không có rủi ro", "D. Chỉ có công ty lớn"],
    answer: 0
  },
  {
    id: 354,
    question: "Ưu điểm của đầu tư dài hạn?",
    options: ["A. Tận dụng lãi kép, giảm biến động", "B. Kiếm tiền nhanh", "C. Không cần nghiên cứu", "D. Giảm số lượng tài sản"],
    answer: 0
  },
  {
    id: 355,
    question: "Chỉ số hiện hành (Current ratio) đo lường điều gì?",
    options: ["A. Khả năng thanh toán nợ ngắn hạn", "B. Khả năng thanh toán nợ dài hạn", "C. Lợi nhuận gộp", "D. Chỉ số tăng trưởng"],
    answer: 0
  },
  {
    id: 356,
    question: "Khi thanh toán hết nợ tín dụng, điểm tín dụng thường:",
    options: ["A. Cải thiện", "B. Giảm", "C. Không đổi", "D. Không ảnh hưởng"],
    answer: 0
  },
  {
    id: 357,
    question: "Kết quả kinh doanh tốt hơn kỳ vọng sẽ làm giá cổ phiếu:",
    options: ["A. Tăng", "B. Giảm", "C. Đi ngang", "D. Không thay đổi"],
    answer: 0
  },
  {
    id: 358,
    question: "Khái niệm 'Margin' là:",
    options: ["A. Vay tiền từ môi giới đầu tư", "B. Đầu tư tiền mặt hoàn toàn", "C. Tiền lãi định kỳ", "D. Không liên quan"],
    answer: 0
  },
  {
    id: 359,
    question: "Tài sản thanh khoản cao nhất là:",
    options: ["A. Tiền mặt", "B. Đất đai", "C. Cổ phiếu penny", "D. Máy móc"],
    answer: 0
  },
  {
    id: 360,
    question: "Kế hoạch tài chính giúp bạn:",
    options: ["A. Sử dụng tiền hợp lý đạt mục tiêu", "B. Tiêu tiền theo cảm xúc", "C. Không cần kiểm soát", "D. Chỉ cần thu nhập cao"],
    answer: 0
  },
  {
    id: 361,
    question: "Thị trường tài chính là:",
    options: ["A. Nơi phân bổ vốn cho nền kinh tế", "B. Nơi sản xuất hàng hóa", "C. Nơi quản lý hành chính", "D. Không tồn tại"],
    answer: 0
  },
  {
    id: 362,
    question: "Rủi ro lãi suất tác động nhiều đến:",
    options: ["A. Trái phiếu dài hạn", "B. Tiền mặt tại nhà", "C. Bất động sản", "D. Hàng tiêu dùng"],
    answer: 0
  },
  {
    id: 363,
    question: "Đầu tư bất động sản chú trọng nhất là:",
    options: ["A. Vị trí và tiềm năng sinh lời", "B. Màu sơn", "C. Số phòng ngủ", "D. Nội thất"],
    answer: 0
  },
  {
    id: 364,
    question: "Lãi kép là:",
    options: ["A. Sự tích lũy lũy thừa theo thời gian", "B. Lãi đơn cộng dồn", "C. Chỉ dành cho người giàu", "D. Rất khó hiểu"],
    answer: 0
  },
  {
    id: 365,
    question: "Đa dạng hóa danh mục giúp:",
    options: ["A. Giảm rủi ro phi hệ thống", "B. Tăng rủi ro", "C. Làm danh mục phức tạp", "D. Không có tác dụng"],
    answer: 0
  },
  {
    id: 366,
    question: "Doanh nghiệp niêm yết nghĩa vụ là:",
    options: ["A. Minh bạch thông tin định kỳ", "B. Chỉ báo cáo cho cổ đông lớn", "C. Tùy ý công bố", "D. Không cần làm gì"],
    answer: 0
  },
  {
    id: 367,
    question: "Thu nhập bị động từ:",
    options: ["A. Đầu tư, cổ tức, thuê tài sản", "B. Lương đi làm thuê", "C. Bán hàng vỉa hè", "D. Chỉ có từ cha mẹ"],
    answer: 0
  },
  {
    id: 368,
    question: "Ngân hàng gửi tiền bảo vệ bởi:",
    options: ["A. Bảo hiểm tiền gửi", "B. Công ty môi giới", "C. Nhà đầu tư", "D. Không ai bảo vệ"],
    answer: 0
  },
  {
    id: 369,
    question: "Bắt đầu đầu tư sớm giúp ích gì?",
    options: ["A. Tận dụng tối đa lãi kép", "B. Kiếm tiền nhanh chóng", "C. Tránh hoàn toàn rủi ro", "D. Làm giàu sau 1 tháng"],
    answer: 0
  },
  {
    id: 370,
    question: "Kế hoạch tài chính là bước đầu:",
    options: ["A. Để hướng tới tự do tài chính", "B. Tốn kém thời gian", "C. Không cần thiết", "D. Để vay nợ nhiều hơn"],
    answer: 0
  },
  {
    id: 371,
    question: "Chỉ số ROE cao là dấu hiệu của:",
    options: ["A. Hiệu quả sử dụng vốn chủ sở hữu tốt", "B. Công ty đang nợ nhiều", "C. Lợi nhuận giảm", "D. Không có ý nghĩa"],
    answer: 0
  },
  {
    id: 372,
    question: "Khái niệm 'Beta' trong chứng khoán là:",
    options: ["A. Đo lường mức độ biến động của cổ phiếu so với thị trường", "B. Tỷ lệ lãi suất", "C. Giá cổ phiếu", "D. Không quan trọng"],
    answer: 0
  },
  {
    id: 373,
    question: "Tại sao cổ phiếu Blue-chip thường ít rủi ro hơn?",
    options: ["A. Doanh nghiệp lớn, uy tín, tài chính vững", "B. Giá luôn tăng", "C. Không bao giờ lỗ", "D. Dễ thao túng"],
    answer: 0
  },
  {
    id: 374,
    question: "Tái cân bằng danh mục giúp nhà đầu tư:",
    options: ["A. Đưa tỷ trọng tài sản về mức mục tiêu ban đầu", "B. Kiếm lời nhanh trên mọi tài sản", "C. Làm danh mục phức tạp hơn", "D. Không cần thiết"],
    answer: 0
  },
  {
    id: 375,
    question: "Khái niệm 'Liquidity' là:",
    options: ["A. Tính thanh khoản", "B. Lợi nhuận", "C. Rủi ro", "D. Vốn chủ"],
    answer: 0
  },
  {
    id: 376,
    question: "Rủi ro lạm phát ảnh hưởng đến:",
    options: ["A. Sức mua của tiền mặt", "B. Chỉ số chứng khoán tích cực", "C. Giá vàng giảm", "D. Không ảnh hưởng"],
    answer: 0
  },
  {
    id: 377,
    question: "Tại sao trái phiếu chuyển đổi lại đặc biệt?",
    options: ["A. Có thể chuyển thành cổ phiếu", "B. Luôn luôn lãi cao", "C. Không bao giờ lỗ", "D. Rất khó mua"],
    answer: 0
  },
  {
    id: 378,
    question: "Đòn bẩy tài chính là:",
    options: ["A. Sử dụng nợ để tăng khả năng sinh lời", "B. Không sử dụng nợ", "C. Chỉ dùng tiền mặt", "D. Tránh rủi ro"],
    answer: 0
  },
  {
    id: 379,
    question: "Đầu tư giá trị thường nhắm tới:",
    options: ["A. Cổ phiếu bị định giá thấp hơn giá trị thực", "B. Cổ phiếu đang tăng nóng", "C. Cổ phiếu penny", "D. Không nhắm tới gì"],
    answer: 0
  },
  {
    id: 380,
    question: "Việc đa dạng hóa giúp:",
    options: ["A. Giảm rủi ro phi hệ thống", "B. Tăng rủi ro", "C. Không giảm rủi ro", "D. Làm danh mục rối"],
    answer: 0
  },
  {
    id: 381,
    question: "Quỹ mở (Open-end fund) cho phép:",
    options: ["A. Nhà đầu tư mua/bán chứng chỉ quỹ định kỳ", "B. Chỉ mua một lần", "C. Không giao dịch", "D. Nhà nước quản lý"],
    answer: 0
  },
  {
    id: 382,
    question: "Phân tích kỹ thuật thường dựa trên:",
    options: ["A. Dữ liệu giá và khối lượng giao dịch trong quá khứ", "B. Báo cáo tài chính chi tiết", "C. Tương lai kinh tế vĩ mô", "D. Tin tức hàng ngày"],
    answer: 0
  },
  {
    id: 383,
    question: "Chỉ số EBITDA là:",
    options: ["A. Lợi nhuận trước lãi vay, thuế và khấu hao", "B. Doanh thu thuần", "C. Lợi nhuận sau thuế", "D. Tổng nợ"],
    answer: 0
  },
  {
    id: 384,
    question: "IPO là viết tắt của:",
    options: ["A. Lần đầu phát hành cổ phiếu ra công chúng", "B. Mua bán sát nhập", "C. Trả cổ tức", "D. Không tồn tại"],
    answer: 0
  },
  {
    id: 385,
    question: "Khi lãi suất giảm, giá trái phiếu thường:",
    options: ["A. Tăng", "B. Giảm", "C. Không đổi", "D. Đi ngang"],
    answer: 0
  },
  {
    id: 386,
    question: "Tâm lý FOMO trong đầu tư dẫn đến:",
    options: ["A. Quyết định sai lầm khi chạy theo thị trường", "B. Đưa ra quyết định sáng suốt", "C. Lợi nhuận bền vững", "D. Cân bằng cảm xúc"],
    answer: 0
  },
  {
    id: 387,
    question: "Khái niệm 'Good debt' là:",
    options: ["A. Nợ được dùng để đầu tư tạo ra thu nhập cao hơn lãi vay", "B. Nợ mua đồ tiêu dùng", "C. Không có nợ tốt", "D. Nợ từ bạn bè"],
    answer: 0
  },
  {
    id: 388,
    question: "Tại sao doanh nghiệp phát hành cổ phiếu?",
    options: ["A. Để huy động vốn mở rộng quy mô", "B. Để trả nợ thay cho vay", "C. Để làm từ thiện", "D. Không có lý do"],
    answer: 0
  },
  {
    id: 389,
    question: "Chỉ số P/S (Price-to-Sales) đo lường:",
    options: ["A. Giá cổ phiếu trên doanh thu mỗi cổ phiếu", "B. Giá trên lợi nhuận", "C. Giá trên tài sản", "D. Nợ trên vốn"],
    answer: 0
  },
  {
    id: 390,
    question: "Mục tiêu đầu tư là:",
    options: ["A. Gia tăng tài sản dựa trên kế hoạch và mức rủi ro chấp nhận", "B. Kiếm tiền bằng mọi giá", "C. Để có chuyện kể", "D. Không cần mục tiêu"],
    answer: 0
  },
  {
    id: 391,
    question: "Tỷ lệ P/B (Price-to-Book) thường được dùng hiệu quả nhất cho ngành nào?",
    options: ["A. Ngân hàng và Tài chính", "B. Công nghệ thông tin", "C. Nông nghiệp", "D. Dịch vụ bán lẻ"],
    answer: 0
  },
  {
    id: 392,
    question: "Một trong những lợi ích lớn nhất của việc lập quỹ khẩn cấp là gì?",
    options: ["A. Tránh việc phải vay nợ lãi suất cao khi gặp biến cố lớn", "B. Giúp mua sắm không giới hạn", "C. Đầu tư mạo hiểm", "D. Mua nhà nhanh chóng"],
    answer: 0
  },
  {
    id: 393,
    question: "Quản trị rủi ro trong tài chính cá nhân chủ yếu xoay quanh việc gì?",
    options: ["A. Chuẩn bị quỹ dự phòng và mua bảo hiểm", "B. Vay mượn để chi tiêu", "C. Chơi chứng khoán lướt sóng", "D. Bỏ tiền vào két sắt"],
    answer: 0
  },
  {
    id: 394,
    question: "Khái niệm 'Thị trường gấu' (Bear market) được định nghĩa là khi thị trường giảm bao nhiêu phần trăm từ đỉnh gần nhất?",
    options: ["A. Khoảng 20% trở lên", "B. Chỉ 5%", "C. Dưới 10%", "D. Hoàn toàn không giao dịch"],
    answer: 0
  },
  {
    id: 395,
    question: "Chỉ số EV/EBITDA thường được dùng để thay thế hoặc bổ sung cho chỉ số nào khi định giá cổ phiếu?",
    options: ["A. P/E", "B. ROE", "C. ROI", "D. Current Ratio"],
    answer: 0
  },
  {
    id: 396,
    question: "Thanh khoản của một tài sản là gì?",
    options: ["A. Khả năng chuyển đổi tài sản đó thành tiền mặt nhanh chóng mà ít tốn chi phí", "B. Khả năng sinh lời của tài sản", "C. Rủi ro của tài sản đó", "D. Kích thước của tài sản"],
    answer: 0
  },
  {
    id: 397,
    question: "Khi lạm phát tăng cao, loại tài sản nào thường được xem là hầm trú ẩn an toàn?",
    options: ["A. Vàng và Bất động sản", "B. Tiền mặt để dưới gối", "C. Cổ phiếu của các công ty công nghệ chưa có lợi nhuận", "D. Trái phiếu lợi suất thấp"],
    answer: 0
  },
  {
    id: 398,
    question: "Lợi ích của 'Thu nhập thụ động' đối với cá nhân là gì?",
    options: ["A. Giảm bớt sự phụ thuộc vào công việc làm công ăn lương và tạo sự tự do tài chính", "B. Khiến người ta trở nên lười biếng", "C. Bị đánh thuế nặng hơn nên không cần thiết", "D. Không có lợi ích thực tế"],
    answer: 0
  },
  {
    id: 399,
    question: "Tại sao nên theo dõi chỉ số EPS (Earning Per Share)?",
    options: ["A. Cho biết lợi nhuận mà doanh nghiệp tạo ra trên mỗi cổ phiếu, giúp định giá cổ phiếu", "B. Để biết số lượng nhân viên", "C. Để kiểm tra chi phí môi giới", "D. Không có giá trị thực tiễn"],
    answer: 0
  },
  {
    id: 400,
    question: "Yếu tố cốt lõi nhất để đạt được Tự do tài chính là gì?",
    options: ["A. Tiết kiệm có kỷ luật, đầu tư sinh lời bền vững và kiểm soát tốt chi tiêu", "B. Mua xổ số mỗi tuần", "C. Vay nợ để chi tiêu xa xỉ", "D. Đi làm nhiều việc cùng lúc mà không đầu tư"],
    answer: 0
  },
  {
    id: 401,
    question: "Bạn có offer mới lương 25 triệu, cao hơn mức hiện tại 5 triệu. Bạn báo với sếp và được tăng lên đúng gần bằng mức đó. Hành động khôn ngoan nhất là?",
    options: ["A. Nghỉ việc vì tự ái.", "B. Ở lại vì không mất công chuyển việc mà vẫn được tăng lương.", "C. Ở lại nhưng lên kế hoạch nghỉ trong 6 tháng tới.", "D. So sánh tổng đãi ngộ và cơ hội phát triển trước khi quyết định."],
    answer: 3
  },
  {
    id: 402,
    question: "Đâu là chiến lược tăng thu nhập được khuyến nghị khi chưa thể tăng lương ở công việc hiện tại?",
    options: ["A. Góp vốn đầu tư chung với bạn bè.", "B. Làm tiếp thị liên kết sau giờ làm.", "C. Vay vốn khởi nghiệp.", "D. Xem tarot tìm kiếm lời khuyên từ vũ trụ."],
    answer: 1
  },
  {
    id: 403,
    question: "1 sản phẩm có giá bán là 250.000VND. Bạn chạy ads với chi phí 1,5 triệu VND và thu được 10 đơn. Phí nền tảng 10% mỗi đơn có lời:",
    options: ["A. 75.000VND", "B. 100.000VND", "C. 110.000VND", "D. 124.000VND"],
    answer: 0
  },
  {
    id: 404,
    question: "Bạn có (1) công việc full-time với lương cố định 8 triệu VND và (2) các khoản đầu tư cho thu nhập biến động. Cách quản lý dòng tiền tối ưu của bạn là:",
    options: ["A. Có bao nhiêu tiêu bấy nhiêu", "B. Dùng khoản (1) chi tiêu cơ bản, tiết kiệm/tái đầu tư khoản (2).", "C. Chia đều cả hai vào chi tiêu và tiết kiệm.", "D. Tiết kiệm/ đầu tư khoản (1), chi tiêu cơ bản bằng khoản (2)"],
    answer: 1
  },
  {
    id: 405,
    question: "Bạn được offer một công việc freelance 10 triệu VND. Công viêc yêu cầu bạn tạm ứng 8 triệu VND cho phần mềm làm viẹc. Lúc này bạn:",
    options: ["A. Lưu hóa đơn để cộng vào hợp đồng.", "B. Đề nghị dùng phần mềm miễn phí.", "C. Tạm ứng bằng quỹ khẩn cấp.", "D. Cảm ơn và hẹn gặp lại."],
    answer: 3
  },
  {
    id: 406,
    question: "Mỗi khi dư tiền, bạn chuyển vào “ngăn tiết kiệm” trên app ngân hàng. Số tiền này sau đó phục vụ chi tiêu hằng tháng của bạn. Đây là hình thức:",
    options: ["A. Tiết kiệm ngắn hạn", "B. Tiết kiệm dài hạn", "C. Tiết kiệm mạo hiểm", "D. Tiết kiệm như không"],
    answer: 3
  },
  {
    id: 407,
    question: "Bạn gửi 1 tỷ đồng kỳ hạn 6 tháng, lãi suất 6,5%/năm. Sau 3 tháng, bạn cần 300 triệu. Chọn phương án nào giúp bạn tối ưu lãi suất cho phần còn lại?",
    options: ["A. Rút toàn bộ sổ, gửi lại 700 triệu mới.", "B. Rút 300 triệu, phần còn lại vẫn giữ nguyên lãi ban đầu.", "C. Rút 300 triệu nếu ngân hàng cho rút từng phần, phần còn lại giữ nguyên kỳ hạn.", "D. Rút 300 triệu, phần còn lại chuyển sang kỳ hạn 3 tháng mới."],
    answer: 2
  },
  {
    id: 408,
    question: "SAFE (Simple Agreement for Future Equity) mang lại lợi ích lớn nhất cho nhà đầu tư start up trong trường hợp nào?",
    options: ["A. Startup sớm sáp nhập", "B. Định giá vòng gọi vốn sau tăng mạnh", "C. Tỷ lệ burn rate giảm đột ngột", "D. Founder bị pha loãng cổ phần"],
    answer: 1
  },
  {
    id: 409,
    question: "Tại VN, lĩnh vực kinh doanh nào sau đây KHÔNG phải thực hiện kểm kê khí nhà kính?",
    options: ["A. Năng lượng", "B. Xây dựng", "C. Giao thông vận tải", "D. Phát triển đô thị"],
    answer: 3
  },
  {
    id: 410,
    question: "Thị trường tín chỉ các-bon là 1 phần của...",
    options: ["A. Thị trường bảo hiểm", "B. Thị trường chứng khoán", "C. Thị trường hàng hóa/vốn", "D. Thị trường tiền tệ"],
    answer: 2
  },
  {
    id: 411,
    question: "Bạn là founder của startup. Sau 3 vòng gọi vốn, bạn nắm dưới 15% cổ phần, hệ quả nguy hiểm nhất là:",
    options: ["A. Không còn động lực phát triển công ty", "B. Không kiểm soát được chiến lược sản phẩm", "C. Không có quyền phủ quyết các quyết định M&A", "D. Không đủ quyền bảo vệ nhà đầu tư cũ"],
    answer: 0
  },
  {
    id: 412,
    question: "Thước đo nào cho thấy 1 startup đang vận hành bền vững, dù chưa có lãi?",
    options: ["A. Burn multiple < 1", "B. EBITDA margin > 10%", "C. LTV/CAC > 1", "D. Monthly recurring revenue (MRR) tăng 20%"],
    answer: 0
  },
  {
    id: 413,
    question: "Bạn có 500 triệu VND cần tiêu trong 4 đợt, mỗi đợt cách nhau 3 tháng. Giải pháp nào giúp bạn tối ưu lãi và thanh khoản?",
    options: ["A. Gửi toàn bộ kỳ hạn 12 tháng", "B. Gửi không kỳ hạn", "C. Mở 4 sổ tiết kiệm kỳ hạn 3, 6, 9, 12 tháng", "D. Gửi 1 sổ 6 tháng, sau đó chia tiếp khi đáo hạn"],
    answer: 2
  },
  {
    id: 414,
    question: "Từ ngày 1/7/2025, theo nghị định 94/2025/ND-CP, người vay tiền qua các ứng dụng bắt buộc phải:",
    options: ["A. Có bảo lãnh vay vốn", "B. Được kiểm tra thông tin tín dụng qua CIC", "C. Có tổng thu nhập tối thiểu 10 triệu đồng/tháng", "D. Tất cả các phương án trên"],
    answer: 1
  },
  {
    id: 415,
    question: "Bạn vay 40 triệu đồng mua xe máy, lãi xuất 12%/ năm tính trên dư nợ giảm dần, trả góp đều trong 12 tháng. Tổng số tiền gốc và lãi phải trả là khoảng:",
    options: ["A. 0 VND, bạn bùng nợ", "B. 50,3 triệu VND", "C. 56,3 triệu VND", "D. 42,6 triệu VND"],
    answer: 3
  },
  {
    id: 416,
    question: "Phương pháp trả nợ cá nhân Snowball tạo hiệu ứng tâm lí tích cực nhờ yếu tố nào?",
    options: ["A. Giảm tổng lãi", "B. Trả nợ nhỏ trước", "C. Không cần thanh toán", "D. Lãi gộp thấp"],
    answer: 1
  },
  {
    id: 417,
    question: "Công việc freelance chạy quảng cáo của bạn thu nhập 150 triệu VND/ năm. Để hợp pháp và tối ưu thuế, bạn nên:",
    options: ["A. Không khai báo gì", "B. Đăng kí hộ kinh doanh và đóng thiế khoán", "C. Mở công ty TNHH để khấu trừ chi phí", "D. Đăng kí cá nhân kinh doanh và tự khai thuế từng lần"],
    answer: 1
  },
  {
    id: 418,
    question: "Khi đầu tư vào căn hộ đang xây (off-plan), rủi ro thường gặp là gì?",
    options: ["A. Khó bán lại vì giá tăng quá nhanh", "B. Không vay được ngân hàng", "C. Bị trì hoãn bàn giao, chậm pháp lý", "D. Không được miễn thuế đất"],
    answer: 2
  },
  {
    id: 419,
    question: "Hệ số P/B (Price-to-Book) thấp trong định giá cổ phiếu của 1 doanh nghiệp bất động sản thường cho thấy điều gì?",
    options: ["A. Doanh nghiệp đang bị định giá quá cao", "B. Doanh nghiệp đang có khoản lỗ lớn", "C. Doanh nghiệp có giá thị trường thấp hơn giá trị sổ sách", "D. Doanh nghiệp có phong thủy không tốt"],
    answer: 2
  },
  {
    id: 420,
    question: "Ngân hàng Nhà nước VN khuyến khích tài chính xanh như thế nào?",
    options: ["A. Cấp bù lãi cho các khoản vay xanh", "B. Hỗ trợ ngân hàng thương mại huy động trái phiếu xanh", "C. Yêu cầu các ngân hàng thương mại phát triển ứng dụng các sản phẩm dịch vụ ngân hàng xanh", "D. Cung cấp bảo lãnh tín dụng"],
    answer: 2
  },
  {
    id: 421,
    question: "Tổng thu nhập tháng này là 15 triệu VND, bạn chi: 7 triệu cho ăn uống, đi lại; 7 triệu đi du lịch; 1 triệu cho tiết kiệm. Bạn có nên điều chỉnh kế hoạch tài chính cá nhân?",
    options: ["A. Có, bạn không cần tiết kiệm", "B. Có, bạn đang chi tiêu quá nhiều vào du lịch", "C. Không, chi tiêu tháng này là tạm thời", "D. Không, tháng nào cũng chi tiêu vậy không sao"],
    answer: 1
  },
  {
    id: 422,
    question: "Theo báo cáo Lương & Thị trường của Navigos (2025), có bao nhiêu phần trăm doanh nghiệp đang tuyển dụng qua các nền tảng số?",
    options: ["A. 12%", "B. 100%", "C. 76%", "D. 51%"],
    answer: 2
  },
  {
    id: 423,
    question: "Với mức thu nhập cá nhân nào sau đây thì bạn bắt đầu phải trả thuế giá trị gia tăng?",
    options: ["A. 1 triệu VND", "B. 10 triệu VND", "C. 100 triệu VND", "D. Mọi mức thu nhập (khi mua hàng hóa dịch vụ)"],
    answer: 3
  },
  {
    id: 424,
    question: "Những 'tiêu sản' của bạn KHÔNG bao gồm...",
    options: ["A. Danh mục cổ phiếu của bạn", "B. Laptop phục vụ việc học/làm việc", "C. Chiếc xe mới mua để đi làm (mất giá)", "D. Điện thoại sử dụng cho giải trí"],
    answer: 0
  },
  {
    id: 425,
    question: "Sau 3 năm đầu kể từ khi mua, giá trung bình của chiếc ô tô mới có thể giảm bao nhiêu phần trăm so với giá mua ban đầu?",
    options: ["A. 5%", "B. 10%", "C. 20%", "D. 35%"],
    answer: 3
  },
  {
    id: 426,
    question: "Bạn đổi giấy tờ sở hữu ô tô của mình để lấy 1 khoản tín dụng. Ô tô được chuyển vào kho của bên cho vay để quản lý. Đây là hình thức:",
    options: ["A. Tín dụng tín chấp", "B. Tín dụng thế chấp", "C. Tín dụng cầm cố", "D. Tín dụng đen"],
    answer: 2
  },
  {
    id: 427,
    question: "Bạn có 1 khoản trả góp với lãi suất thay đổi (ARM). Khi lãi suất chính sách giảm, khoản phải trả của bạn:",
    options: ["A. Giảm tương ứng", "B. Không có gì thay đổi", "C. Tăng tương ứng", "D. Biến mất"],
    answer: 0
  },
  {
    id: 428,
    question: "Bạn chọn mua chứng chỉ tiền gửi ngân hàng với lãi suất 6%/ năm thay vì đầu tư quỹ ETF lợi nhuận trung bình 9%/năm. Chi phí cơ hội là gì?",
    options: ["A. Lợi nhuận tiềm năng 3% bị bỏ lỡ từ quỹ ETF", "B. Phí quản lý của chứng chỉ tiền gửi", "C. Lãi suất cố định 6%/năm", "D. Thời gian nghiên cứu quỹ ETF"],
    answer: 0
  },
  {
    id: 429,
    question: "Bạn tiết kiệm 30 triệu VND/ năm, lãi suất 8%/ năm. Để tích lũy 3 tỷ VND nghỉ hưu sớm, bạn mất bao lâu?",
    options: ["A. 29 năm", "B. 50 năm", "C. 37 năm", "D. Cả đời"],
    answer: 0
  },
  {
    id: 430,
    question: "Nhóm nghề 'xanh' sẽ chiếm tỷ trọng bao nhiêu trên tổng số việc làm trong tương lai (theo TCTK 2024)?",
    options: ["A. 5%", "B. 15%", "C. 40%", "D. 100%"],
    answer: 2
  },
  {
    id: 431,
    question: "Bạn tiết kiệm được 1 tỷ sau 10 năm đều đặn gửi tiết kiệm 6,5 triệu VND/ tháng. Phép màu nào giúp bạn đạt được điều này?",
    options: ["A. Lãi suất kép 7%/năm", "B. Lãi suất đơn 7%/năm", "C. Lãi suất ưu đãi 7%/năm", "D. Lãi suất chiết khấu 7%/năm"],
    answer: 0
  },
  {
    id: 432,
    question: "Mức rủi ro của trái phiếu chính phủ là:",
    options: ["A. Rủi ro cao", "B. Rủi ro trung bình", "C. Rủi ro cực cao", "D. Rủi ro cực thấp, khả năng bảo toàn vốn cao"],
    answer: 3
  },
  {
    id: 433,
    question: "Mua trái phiếu 50 triệu, kỳ hạn 5 năm, lãi đơn 7%/năm. Đến ngày đáo hạn, bạn thu được:",
    options: ["A. 62,5 triệu", "B. 64,5 triệu", "C. 67,5 triệu", "D. 68,5 triệu"],
    answer: 2
  },
  {
    id: 434,
    question: "Tầng lớp trung lưu và dân số thành thị ở Việt Nam tăng nhanh dẫn đến:",
    options: ["A. Lưu lượng tiền giảm", "B. Mức tiêu dùng trong nước tăng", "C. Tốc độ toàn cầu hóa giảm", "D. Không có ảnh hưởng kinh tế"],
    answer: 1
  },
  {
    id: 435,
    question: "Bạn đang chi tiêu định kỳ trong vô thức khi:",
    options: ["A. Trả phí quản lý thẻ ngân hàng", "B. Mua gói data 5G cho 2 sim nhưng chỉ xài 1", "C. Mua chiếc túi hàng hiệu không thực sự cần", "D. Đóng học phí"],
    answer: 1
  },
  {
    id: 436,
    question: "Sẵn sàng chi trả nhiều hơn vì đã bỏ thời gian lựa chọn, kể cả khi không còn phù hợp, là ví dụ của:",
    options: ["A. Hiệu ứng neo (anchoring)", "B. Tư duy chi phí chìm (sunk cost)", "C. Lệch chuẩn xác nhận", "D. Tự định giá tài sản"],
    answer: 1
  },
  {
    id: 437,
    question: "Vay 5 triệu VND lãi đơn 10%/năm trong 2 năm. Tổng số tiền gốc và lãi phải trả là:",
    options: ["A. 5 triệu VND", "B. 6 triệu VND", "C. 7 triệu VND", "D. 8 triệu VND"],
    answer: 1
  },
  {
    id: 438,
    question: "Khoản nợ quá hạn khoảng 200 ngày được xếp vào:",
    options: ["A. Nợ xấu nhóm 3 - Dưới tiêu chuẩn", "B. Nợ xấu nhóm 1 - Đủ tiêu chuẩn", "C. Nợ xấu nhóm 4 - Nghi ngờ", "D. Nợ xấu nhóm 2 - Cần chú ý"],
    answer: 0
  },
  {
    id: 439,
    question: "CIC lưu trữ lịch sử nợ xấu của bạn trong vòng bao lâu kể từ khi tất toán?",
    options: ["A. 1 năm", "B. 1 quý", "C. 5 năm", "D. 10 năm"],
    answer: 2
  },
  {
    id: 440,
    question: "Quỹ dự phòng khẩn cấp 35 triệu VND nên được 'gửi gắm' ở đâu?",
    options: ["A. Cổ phiếu tăng trưởng", "B. Bất động sản", "C. Tiết kiệm linh hoạt / Thanh khoản cao", "D. Vàng"],
    answer: 2
  },
  {
    id: 441,
    question: "Bạn mua cổ phiếu A với 80.000 VND/cổ phiếu. Sau đó, giá cổ phiếu giảm xuống còn 70.000 VND nhưng bạn nhận được cổ tức 2.000 VND/cổ phiếu. Bạn đã...",
    options: ["A. Lãi 10% khi đầu tư", "B. Lãi 7% khi đầu tư", "C. Lỗ 10% khi đầu tư", "D. Lỗ 10% vốn, tính cả cổ tức thì lỗ 10.000 (12,5%)"],
    answer: 3
  },
  {
    id: 442,
    question: "Sau khi bán cổ phiếu, bạn thu được 5 triệu VND (khi giao dịch cổ phiếu đã có lãi/lỗ hoặc thu nhập chuyển nhượng). Ở Việt Nam, cá nhân bán chứng khoán bị tạm khấu trừ thuế Thu nhập cá nhân là bao nhiêu?",
    options: ["A. 5.000 VND (0,1% trên giá trị bán)", "B. 50.000 VND", "C. 500.000 VND", "D. Bạn được miễn thuế"],
    answer: 0
  },
  {
    id: 443,
    question: "Trọng tâm của chiến lược phát triển nền kinh tế xanh tại Việt Nam là...",
    options: ["A. Phát triển thị trường tài chính xanh và thị trường các-bon", "B. Chính sách ưu đãi tín dụng cho các dự án năng lượng hóa thạch", "C. Khuyến khích các trang trại hữu cơ (quy mô nhỏ)", "D. Tất cả các phương án trên"],
    answer: 0
  },
  {
    id: 444,
    question: "Thiên kiến giá trị cảm nhận (Perceived value) là khi...",
    options: ["A. Cùng một món hàng nhưng bạn phải mua với giá cao hơn", "B. Bạn luôn cảm thấy mình không đủ tiền", "C. Bạn đánh giá sản phẩm giá trị cao hơn (hoặc thấp) bị ảnh hưởng bởi bối cảnh/giá neo, và sẵn sàng trả nhiều hơn cho nó", "D. Bạn luôn chọn combo rẻ dù vượt nhu cầu"],
    answer: 2
  },
  {
    id: 445,
    question: "Các nền tảng mua sắm thiết kế các mốc thưởng 'đơn từ 300k được tặng quà', 'tích điểm' nhằm...",
    options: ["A. Kéo dài thời gian sử dụng ứng dụng", "B. Kích hoạt tinh thần 'phiếu bé ngoan'", "C. Tăng giá trị trung bình đơn hàng (AOV) và tỷ lệ quay lại", "D. Tất cả các phương án trên"],
    answer: 3
  },
  {
    id: 446,
    question: "Lạm phát và thị trường cổ phiếu 'là gì của nhau' (trong ngắn hạn khi lạm phát vượt ngưỡng kỳ vọng/tăng lãi suất)?",
    options: ["A. Thị trường tăng tương ứng", "B. Thị trường giảm/áp lực (vì lãi suất tăng, dòng tiền rút ra)", "C. Bình ổn", "D. Không có mối quan hệ"],
    answer: 1
  },
  {
    id: 447,
    question: "Bạn mua 100.000 VND/cổ phiếu X. Sau đó giá giảm còn 80.000 VND nhưng nhận cổ tức 3.000 VND. Lợi suất đầu tư là...",
    options: ["A. 17%", "B. -17%", "C. 10%", "D. -20%"],
    answer: 1
  },
  {
    id: 448,
    question: "200 cổ phiếu P/E=15, lời 1 triệu. Lợi nhuận mỗi cổ phiếu EPS = 5.000. Giá 1 cổ phiếu là bao nhiêu?",
    options: ["A. 200.000", "B. 20.000", "C. 75.000", "D. 50.000"],
    answer: 2
  },
  {
    id: 449,
    question: "Sự khác biệt lớn nhất giữa chiến lược DCA vào quỹ và DCA vào cổ phiếu riêng lẻ?",
    options: ["A. DCA quỹ ít phí", "B. DCA quỹ giảm rủi ro cty phá sản (tự động đa dạng hóa/hành vi)", "C. NAV ổn định", "D. Chỉ áp dụng cho ETF"],
    answer: 1
  },
  {
    id: 450,
    question: "Truyền thông cam kết lãi 20%/tháng bị sếp quỹ đầu tư từ chối vì...",
    options: ["A. Sếp không hài hước", "B. Cũ/thiếu hiệu quả", "C. Vi phạm pháp luật và quy chuẩn đạo đức về cam kết lợi nhuận bất thường rủi ro cực cao", "D. Sếp không thích bạn"],
    answer: 2
  },
  {
    id: 451,
    question: "Nhóm nghề 'xanh' chiếm tỷ trọng % cao (theo dự báo, ví dụ 15-40%), nhưng theo câu hỏi số liệu TCTK 2024 chỉ định bao nhiêu?",
    options: ["A. 5%", "B. 15%", "C. 40%", "D. 100%"],
    answer: 1
  },
  {
    id: 452,
    question: "Quỹ ESG lợi nhuận 12%, phí quản lý 2%. Lợi nhuận thực nhận (đơn giản)?",
    options: ["A. 10%", "B. 19%", "C. 14%", "D. 8%"],
    answer: 0
  },
  {
    id: 453,
    question: "Việt Nam đang dẫn đầu ASEAN (2025) ở mảng nào theo Biến đổi khí hậu & năng lượng?",
    options: ["A. Ô nhiễm", "B. Rủi ro BĐKH", "C. Quy mô dự án điện mặt trời, điện gió, thủy điện", "D. Nhân lực ứng phó thiên tai"],
    answer: 2
  },
  {
    id: 454,
    question: "Theo Vietnam Holding (2025), cứ 100 người VN thì có 9 người (9%) là...",
    options: ["A. Nhà đầu tư mạo hiểm", "B. Chuyên viên tài chính", "C. Nhà đầu tư bất động sản", "D. Nhà đầu tư chứng khoán (có tài khoản chứng khoán)"],
    answer: 3
  },
  {
    id: 455,
    question: "Có 10 triệu, giá 10k/cp. Ký quỹ 50% (đòn bẩy 1:2) => sức mua 20 triệu. Số cp mua tối đa?",
    options: ["A. 5.000", "B. 1.000", "C. 10.000", "D. 2.000"],
    answer: 3
  },
  {
    id: 456,
    question: "Bị call margin mà không nộp tiền/tăng thế chấp thì...",
    options: ["A. Bị cấm giao dịch 3 năm", "B. Khởi tố hình sự", "C. Công ty chứng khoán sẽ bán giải chấp cổ phiếu của bạn", "D. Gọi cháy máy"],
    answer: 2
  },
  {
    id: 457,
    question: "Trong phân tích CƠ BẢN chứng khoán, bạn KHÔNG sử dụng...",
    options: ["A. ROE", "B. RSI (Chỉ báo phân tích kỹ thuật)", "C. P/E", "D. EPS"],
    answer: 1
  },
  {
    id: 458,
    question: "Báo cáo xu hướng Tiêu dùng Cimigo (2025), các hộ gia đình VN đang...",
    options: ["A. Gia tăng đầu tư tài chính", "B. E ngại đầu tư tài chính", "C. Gia tăng tỷ lệ tiết kiệm", "D. Mở rộng thu nhập"],
    answer: 2
  },
  {
    id: 459,
    question: "Điểm tín dụng cá nhân cao. Rủi ro không trả được nợ ... và khả năng được cho vay ...",
    options: ["A. Cao - Thấp", "B. Thấp - Cao", "C. Cao - Cao", "D. Thấp - Thấp"],
    answer: 1
  },
  {
    id: 460,
    question: "Vay 40 triệu lãi 10%/năm. Sau 4 năm, TH lãi đơn thì phải trả tổng bao nhiêu?",
    options: ["A. 70 tr", "B. 20 tr", "C. 50 tr", "D. 56 triệu"],
    answer: 3
  },
  {
    id: 461,
    question: "Hợp nhất nợ (Debt Consolidation) giúp được gì?",
    options: ["A. Xóa nợ xấu", "B. Cắt giảm số nợ gốc", "C. Gộp nhiều khoản vay lại (thường có lãi thấp hơn), thanh toán 1 nơi dễ quản lý", "D. Chẳng giúp gì"],
    answer: 2
  },
  {
    id: 462,
    question: "Ưu điểm chính của trả nợ cách tuần (Biweekly)?",
    options: ["A. Dễ tính", "B. Thực hiện 26 lần trả nửa nợ /năm = 13 tháng nợ gốc, giúp rút ngắn kỳ hạn và giảm lãi vay", "C. Lãi thấp", "D. Ít tiền /lần"],
    answer: 1
  },
  {
    id: 463,
    question: "Tệp khách bán khóa học bão hòa, cách mở rộng bền vững?",
    options: ["A. Hạ giá cạnh tranh", "B. Ra gói 1-1", "C. eBook", "D. Chạy affiliate/cross-sell khóa học với người khác"],
    answer: 3
  },
  {
    id: 464,
    question: "Nhóm HH-DV chiếm trọng số CPI VN lớn nhất?",
    options: ["A. Nhà ở, điện nước, VLxD", "B. Y tế", "C. Hàng ăn và dịch vụ ăn uống (khoảng gần 34%)", "D. Giáo dục"],
    answer: 2
  },
  {
    id: 465,
    question: "25 tuổi, lương 12tr, đồng nghiệp mới 15tr, làm gì đầu tiên?",
    options: ["A. Nghỉ việc", "B. Thương lượng luôn", "C. Bình tĩnh rà soát Portfolio/năng lực đối chiếu thị trường (để có cơ sở/plan đàm phán)", "D. Cày job ngoài"],
    answer: 2
  },
  {
    id: 466,
    question: "Trong lương 3P (Position, Person, Performance), năng lực cá nhân ở đâu?",
    options: ["A. Position", "B. Person (P2)", "C. Performance (P3)", "D. Potential"],
    answer: 1
  },
  {
    id: 467,
    question: "Vay 200 tr, trả lãi TRƯỚC 5% (10tr). Bạn chỉ nhận 190tr thực tế. Lãi suất thực?",
    options: ["A. 5%", "B. 5.26% (10/190)", "C. 10%", "D. 10.26%"],
    answer: 1
  },
  {
    id: 468,
    question: "Trong thời gian ân hạn của khoản vay, bạn được...",
    options: ["A. Không phải trả lãi", "B. Không phải trả nợ gốc (hoặc cả gốc+lãi tùy gói)", "C. Không trả đồng nào", "D. Giảm lãi"],
    answer: 1
  },
  {
    id: 469,
    question: "Lĩnh vực VN thu hút vốn khởi nghiệp nhất (2025)?",
    options: ["A. Thương mại điện tử", "B. Viễn thông", "C. Fintech/AI ứng dụng (phổ biến)", "D. Nông nghiệp"],
    answer: 2
  },
  {
    id: 470,
    question: "Theo Dân trí (2025), kênh đầu tư nhiều người VN ưu tiên?",
    options: ["A. Bất động sản (vẫn ở vị trí cao) / Vàng tùy thời điểm.", "B. Chứng khoán", "C. Crypto", "D. Vàng"],
    answer: 3
  },
  {
    id: 471,
    question: "Rút vốn quỹ đầu tư (quỹ đóng vs quỹ mở)? Quỹ mở rút khi nào?",
    options: ["A. Quỹ HT dự án", "B. Bất kì lúc nào (NAV phiên giao dịch định kỳ)", "C. Khi lên sàn", "D. Hết hạn"],
    answer: 1
  },
  {
    id: 472,
    question: "Tỷ lệ ký quỹ (margin) ban đầu do UBCKNN tối thiểu hay CTCK tối thiểu (ko thấp hơn bao nhiêu)?",
    options: ["A. 30%", "B. 40%", "C. 50%", "D. 60%"],
    answer: 2
  },
  {
    id: 473,
    question: "Tổng rút ròng quỹ đầu tư 4700 tỷ quý 1/2025 phản ánh:",
    options: ["A. Năng lực xuống", "B. Tâm lý phòng thủ chuyển sang kênh trú ẩn / tiền mặt khi vĩ mô rủi ro", "C. Kinh tế phá sản", "D. Sang crypto"],
    answer: 1
  },
  {
    id: 474,
    question: "Mua ô tô cũ chạy dịch vụ có thu nhập, bị mất giá. Vậy xe là:",
    options: ["A. Tiêu sản", "B. Tích sản (tạo ra dòng tiền thu nhập vượt chi phí khấu hao)", "C. Tài sản vô hình", "D. Chẳng là gì"],
    answer: 1
  },
  {
    id: 475,
    question: "Mua đt 14tr quẹt thẻ lãi 3%/th. Chậm 4 tháng + 200k phạt. Tổng tốn?",
    options: ["A. 15.5 tr", "B. 15.880.000 VND (14tr + 14tr*3%*4 + 200k = 15.88 tr)", "C. 14 tr", "D. 16 tr"],
    answer: 1
  },
  {
    id: 476,
    question: "Mua khóa ảo 5tr ko học mà nghĩ là 'tích sản tri thức', thực ra là?",
    options: ["A. Tiêu sản tâm lý (chưa mang lại giá trị/doanh thu thực nhưng lừa phỉnh bản thân)", "B. Tích sản", "C. Đầu tư hiệu quả", "D. Tài sản số"],
    answer: 0
  },
  {
    id: 477,
    question: "Clip viral 1tr view ko ra đơn mà vẫn ảo tưởng thương hiệu, lỗi gì?",
    options: ["A. Lỗi chốt sale", "B. Bẫy dopamine ảo (Vanity metrics - nhầm view=tiền)", "C. Thất bại SEO", "D. Mất thời gian"],
    answer: 1
  },
  {
    id: 478,
    question: "App giảm giá 80% đếm ngược 5 phút, quẹt ngay. Là bẫy gì?",
    options: ["A. Sunk cost", "B. Bẫy Urgency - Dopamine khẩn cấp (thúc đẩy mua vội)", "C. Mua sắm thông minh", "D. Lời chốt sale"],
    answer: 1
  },
  {
    id: 479,
    question: "Nạp 1 năm lên VIP, KM 5tr nhưng max 15% / GD. Bạn dính bẫy:",
    options: ["A. Dopamine cấp bậc (status) tưởng là hời", "B. Tích sản", "C. Đầu tư dài hạn", "D. Nâng cấp hạn mức"],
    answer: 0
  },
  {
    id: 480,
    question: "Thấy Group khoe lãi coin, mua theo vì nhóm uy tín. Bẫy gì?",
    options: ["A. Đám đông (Herd mentality - FOMO)", "B. Buồng vang", "C. Lời khuyên chuyên gia", "D. Kinh nghiệm đầu tư"],
    answer: 0
  },
  {
    id: 481,
    question: "Gói bảo hiểm 20tr/năm trả trong 20 năm, vốn gốc bảo vệ 500tr. Cuối kỳ nhận lại 400tr vốn phí + 3%/năm cam kết = ? (ước chừng)",
    options: ["A. Sinh lời lớn nhất trong các khoảng đầu tư", "B. Quanh mức >= 538.000.000 VND (do có lãi cam kết kép cộng thêm vốn hoàn lại)", "C. Chỉ nhận 500tr nếu có sự cố", "D. Mất toàn bộ số tiền"],
    answer: 1
  },
  {
    id: 482,
    question: "Bạn lập startup, đổ toàn bộ tiền vào, Không tự trả lương cho mình trong 1 năm. Nếu công ty phá sản, tòa xem xét việc không hạch toán đó là gì?",
    options: ["A. Quyết định cá nhân (nên ko có quyền ưu tiên chủ nợ lương)", "B. Tiết kiệm công ty", "C. Hình thức thưởng nhân viên", "D. Tăng vốn chủ"],
    answer: 0
  },
  {
    id: 483,
    question: "Bạn góp tiền 300tr danh nghĩa cho startup mượn (ko lãi/ko hợp đồng) rồi nó phá sản, lúc thanh lý kiện đòi lại:",
    options: ["A. Có thể chia dễ", "B. Nguy cơ mất trắng vì không có Hợp đồng Vay, tòa khó ưu tiên như một chủ nợ thường", "C. Mất toàn bộ để bồi thường thiệt hại", "D. Thành cổ đông"],
    answer: 1
  },
  {
    id: 484,
    question: "Trong 2 năm, nhận cổ tức tạm ứng 5 tr/th. Ko có BCTC. Năm 3 phá sản. Vậy có đòi tiền vốn góp?",
    options: ["A. Không - vì cổ đông là người gánh rủi ro cuối cùng, trả 100% nợ ưu tiên cho các chủ nợ trước, nếu còn mới tới cổ đông", "B. Có - được trả ngay", "C. Xin ngân hàng", "D. Mặc định ngân hàng giữ"],
    answer: 0
  },
  {
    id: 485,
    question: "Vay 600tr Ls 12% mua/kinh doanh (thế chấp nhà 1,2 tỷ). Sau 1.5 năm phát mãi bán 950tr. Chi phí 5%. Còn lại ? (600tr vốn + 108tr lãi + 47.5tr phí phát mãi = 755.5 tr. Thu về: 950-755.5 = 194.5 tr)",
    options: ["A. Quanh 194 triệu VND", "B. Mất trắng", "C. Vẫn nợ lãi ngân hàng", "D. 950 tr"],
    answer: 0
  },
  {
    id: 486,
    question: "Mở CF lãi ròng 5tr nhưng dòng tiền âm do bù mặt bằng nhân sự. 6 tháng sập. Rủi ro gì?",
    options: ["A. Không có lãi", "B. Dòng tiền âm kéo dài (tức khoản thu thực tế nhỏ hơn khoản phải chi thực tế dù kế toán gộp báo có lãi/khấu hao ảo)", "C. Nợ quá lớn", "D. Lợi nhuận quá nhỏ"],
    answer: 1
  },
  {
    id: 487,
    question: "Bạn muốn tích lũy số tiền (A) và bạn tiết kiệm số tiền (B) mỗi tháng (PV, r, n). Những câu hỏi nhắm đích nghỉ hưu sử dụng các quy tắc gì?",
    options: ["A. Quy tắc 50/30/20", "B. Lãi kép, lạm phát và quy tắc 4% (25 lần nhu cầu chỉ tiêu hằng năm)", "C. Lãi đơn", "D. Đánh lô"],
    answer: 1
  },
  {
    id: 488,
    question: "Một số ứng dụng ngân hàng số InCorp (2025) cho thấy dịch vụ tăng mạnh/ thanh toán không chạm?",
    options: ["A. Tăng trên 100%", "B. Không tăng", "C. Tăng 10%", "D. Giảm 5%"],
    answer: 0
  },
  {
    id: 489,
    question: "Trong đầu tư giá trị (Value Investing), Bẫy Giá trị (Value Trap) là gì?",
    options: ["A. Cổ phiếu đắt", "B. Cổ phiếu có các chỉ số định giá (P/E, P/B) rất thấp nhưng lợi nhuận tương lai suy giảm, kẹt mãnh liệt", "C. Thị trường bong bóng", "D. Điểm mua kỹ thuật bị sập"],
    answer: 1
  },
  {
    id: 490,
    question: "Định giá một startup ở giai đoạn Pre-seed chưa có lời có thể sử dụng phương pháp nào?",
    options: ["A. P/E", "B. EPS tương lai", "C. Cổ tức", "D. Berkus / Scorecard / Định giá dựa trên tài sản (Asset-based) hoặc rủi ro"],
    answer: 3
  },
  {
    id: 491,
    question: "Khi mua Chứng chỉ Tiền gửi thay vì ETF ở thời kỳ Bull Market, cái giá lớn nhất mình trả là?",
    options: ["A. Phí tiền gửi", "B. Lãi suất", "C. Rủi ro vỡ nợ", "D. Chi phí cơ hội (Opportunity Cost) của đợt tăng mạnh thị trường ETF"],
    answer: 3
  },
  {
    id: 492,
    question: "Một số quỹ đầu tư Việt Nam có 'tháng giao dịch chốt sổ', thanh khoản (rút) đối với Quỹ Mở tại Việt Nam ra sao?",
    options: ["A. Không rút được", "B. Đầu năm tới cuối năm", "C. Được bán lại bất cứ lúc nào cho Công ty QLQ với giá NAV định kỳ (khớp phiên)", "D. Sang tên cho người khác"],
    answer: 2
  },
  {
    id: 493,
    question: "KRX (Korean Exchange) - Hệ thống mới để giao dịch chứng khoán tại VN với kỳ vọng lớn nhất là?",
    options: ["A. Bỏ bán khống", "B. Bỏ room ngoại", "C. Tăng lượng giao dịch, kỳ vọng T+0 và nâng hạng thị trường", "D. Triệt tiêu các vụ thao túng"],
    answer: 2
  },
  {
    id: 494,
    question: "Quảng cáo: 'Mua giá 10 triệu nhưng giá gạch 80% chỉ còn 2 triệu, trong khi chợ bán có 3 triệu'. Bẫy gì?",
    options: ["A. Hàng giả", "B. Giảm giá ảo/neo giá phi thực tế (Anchoring)", "C. Sale xả kho", "D. Voucher hết hạn"],
    answer: 1
  },
  {
    id: 495,
    question: "Thương lượng lương: Lợi thế BATNA (Best Alternative to a Negotiated Agreement)?",
    options: ["A. Kinh nghiệm chém gió", "B. MQH", "C. Có điểm lùi/nhiều offer khác tốt nên đàm phán cực lợi thế", "D. Rảnh rỗi"],
    answer: 2
  },
  {
    id: 496,
    question: "Chưa tới mức đóng thuế thì freelancer làm hồ sơ gì hợp pháp lâu dài?",
    options: ["A. Hồ sơ hộ nghèo", "B. Đăng ký cá nhân KD / Hộ Kinh doanh và khai Khoán (nếu lớn) hoặc để cty khấu trừ 10% vãng lai", "C. Lập công ty ma", "D. Ngó lơ"],
    answer: 1
  },
  {
    id: 497,
    question: "Thuật ngữ 'Debt Consolidation' (Hợp nhất nợ) có nghĩa là gì?",
    options: ["A. Quỵt nợ", "B. Bán tài sản", "C. Gộp nhiều khoản lãi/thẻ cao vào một khoản duy nhất (vd tín chấp) lãi thấp hơn, dễ trả hơn", "D. Chia nhỏ nợ ra nhiều phần"],
    answer: 2
  },
  {
    id: 498,
    question: "Khẩu vị đầu tư: Trái phiếu doanh nghiệp mang rủi ro lớn hơn Trái phiếu CP chỗ nào?",
    options: ["A. Ít kỳ hạn hơn", "B. Lãi thấp hơn", "C. Rủi ro thanh toán (vỡ nợ) từ DN phát hành", "D. Bị chính phủ thu hồi"],
    answer: 2
  },
  {
    id: 499,
    question: "ROIC (Return on Invested Capital) được định nghĩa là?",
    options: ["A. Tiền trong ngân hàng", "B. Doanh thu tổng năm", "C. Tỷ suất sinh lời trên tổng vốn đầu tư (vốn chủ + nợ gốc), đo độ hiệu quả sinh lời cốt lõi", "D. Rủi ro pha loãng"],
    answer: 2
  },
  {
    id: 500,
    question: "Cổ phiếu ESG (Environmental, Social, Governance) tăng mạnh sức thu hút (câu hỏi lặp Tín dụng xanh/Net Zero). Điểm hạn chế (Trade-off) là?",
    options: ["A. Lãi cam kết rất cao", "B. Thường đi kèm tiêu chí tuân thủ gắt gao (Compliance) có thể giới hạn tăng trưởng trong ngắn hạn so với cty thiếu kiểm soát môi trường", "C. Mở room bừa bãi", "D. Giảm uy tín Cty"],
    answer: 1
  },
  {
    id: 501,
    question: "Quy luật 'Snowball' trả nợ là?",
    options: ["A. Trả nợ lớn nhất / Lãi kinh dị nhất trước", "B. Trả những khoản nhỏ nhất để dứt điểm có thêm động lực tâm lý, rồi mới sang cục bự", "C. Bùng nợ", "D. Cứ để nợ nở mãi"],
    answer: 1
  },
  {
    id: 502,
    question: "Quy luật 'Avalanche' trả nợ thì sao?",
    options: ["A. Giống Snowball", "B. Quỵt lẹ hơn", "C. Trả các khoản lãi cao nhất trước để tối ưu giảm tiền lãi phát sinh về mặt toán học", "D. Nhờ người thân"],
    answer: 2
  },
  {
    id: 503,
    question: "EV/EBITDA khác P/E lớn nhất ở đâu?",
    options: ["A. Là y xì đúc", "B. P/E cao hơn", "C. EV (Enterprise Value) đã bao gồm cấu trúc nợ (Debt) chuẩn hóa cho cty nhiều khấu hao/nợ", "D. EBITDA đo bằng USD"],
    answer: 2
  },
  {
    id: 504,
    question: "Trong thuế: Lợi tức từ Đầu tư Nhận Bằng Tiền bị đánh thuế ngay nguồn là bao nhiêu %? (Việt Nam)",
    options: ["A. Không đánh", "B. Thuế Thuế Thu nhập cá nhân từ cổ tức là 5%", "C. 10%", "D. 20% lũy tiến"],
    answer: 1
  },
  {
    id: 505,
    question: "Bạn quyết toán thuế hàng năm nhưng tổng năm (chưa khấu từ) đã bị cty đóng vãng lai 10%, và trung bình thu nhập chịu thuế ko chạm ngưỡng nộp lũy tiến (vd hoàn cảnh <11 triệu). Bạn sẽ?",
    options: ["A. Kệ nó", "B. Bị truy thu thêm", "C. Bị nộp phạt", "D. Làm quyết toán Tự quyết để được Hoàn Thuế", ],
    answer: 3
  },
  {
    id: 506,
    question: "Quẹt thẻ tín dụng lãi suất treo 18%/năm, bị chậm kỳ 90 ngày. Khoản phí chậm nộp và lãi sẽ biến thành?",
    options: ["A. Trả lại bằng tiền", "B. Có thể trễ thêm", "C. Số lãi gộp bị phạt tăng chóng mặt, nếu kéo trên 90 ngày có thể lên nợ xấu cấp cao (Nhóm 3+)", "D. Chả sao cả, chỉ khóa thẻ"],
    answer: 2
  },
  {
    id: 507,
    question: "Theo nghị định về tín dụng, các khoản cho vay ngang hàng (P2P), cho vay app, người dùng sẽ?",
    options: ["A. Được làm tùy ý", "B. Không đòi được nợ", "C. Cắn răng trốn", "D. Được CIC - trung tâm thông tin ngân hàng NNVN - quản lý/cập nhật điểm hồ sơ nếu công ty có kết nối"],
    answer: 3
  },
  {
    id: 508,
    question: "Nếu có khủng hoảng suy thoái kinh tế nặng, tài sản nào thường phản ứng 'phòng thủ' (Safe Haven)?",
    options: ["A. Crypto - Bitcoin", "B. NFT", "C. Cổ phiếu công nghệ rủi ro cao", "D. Vàng, Trái phiếu Chính Phủ"],
    answer: 3
  },
  {
    id: 509,
    question: "Tiền bảo hiểm được DIV (Bảo hiểm tiền gửi VN) bảo vệ ở các ngân hàng thương mại, chi trả tối đa bao nhiêu 1 cá nhân 1 NH nếu phá sản (mức mới nhất áp dụng)?",
    options: ["A. 50 triệu", "B. 200 triệu", "C. 125 triệu (từ 2021)", "D. Không bảo hiểm"],
    answer: 2
  },
  {
    id: 510,
    question: "Trong quản lý cá nhân với tài sản xe hơi, khấu hao xe khoảng ... mỗi năm, vậy cái giá 'mua để giữ mặt mũi' thực ra tiêu cực hơn mua do Cần?",
    options: ["A. Khoảng 1 - 2%", "B. Tiết kiệm vì xe lên giá", "C. Ít nhất 10-15%/năm cộng định phí bảo dưỡng", "D. Hoàn toàn tự do"],
    answer: 2
  },
  {
    id: 511,
    question: "Thương mại điện tử có thuật ngữ 'Chốt Sale' và 'Freeship/Hoàn xu'. Tại sao họ chuộng Hoàn Xu hơn Tặng tiền mặt?",
    options: ["A. Dễ làm", "B. Do không mất tiền", "C. Khóa (Lock-in) người dùng vào chu trình mua sắm tiếp theo trên hệ sinh thái để tiêu cái Xu đó", "D. Nền tảng lỗi"],
    answer: 2
  },
  {
    id: 512,
    question: "Câu nào sai: VN30 / VN-Index",
    options: ["A. VN30 là rổ 30 cổ lớn thanh khoản hàng đầu", "B. Cổ VN30 đại diện hơn VN-Index vì ít bị pha loãng bằng các công ty penny", "C. VN-Index bao gồm toàn bộ VN30", "D. Có thể mua chứng chỉ quỹ phỏng theo VN30, nhưng mua trực tiếp Chỉ số là sai (ko có Hợp đồng Tương lai VN-Index mà chỉ có VN30)"],
    answer: 1
  },
  {
    id: 513,
    question: "Trúng số (Game show tài chính) hoặc vé 1 tỷ. Mức thuế thu nhập (Trúng thưởng) ở VN đối với phần vọt trên 10 triệu là?",
    options: ["A. 5%", "B. 20%", "C. 35%", "D. 10%"],
    answer: 3
  }
];
