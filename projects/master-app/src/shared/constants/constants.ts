export class ValidatorMess {
    public static readonly INVALID_ONLY_WHITE_SPACE = "Không được chỉ chứa khoảng trắng";
    public static readonly INVALID_DATA = "Dữ liệu không hợp lệ";
    public static readonly INVALID_TIME_LINE = "Thời gian bắt đầu phải nhỏ hơn thời gian kết thúc";
}
export class Constants {
    public static readonly TASK_STATUS_TYPE = [ // trạng thái của task
        { name: "Mới tạo", value: 0, bg: '', color: '' },
        { name: "Đã giao việc", value: 1, bg: 'bg-bluegray-500', color: 'text-white' },
        { name: "Đang thực hiện", value: 2, bg: 'bg-orange-500', color: 'text-white' },
        { name: "Chờ đánh giá", value: 4, bg: 'bg-blue-400', color: 'text-white' },
        { name: "Hoàn thành", value: 3, bg: 'bg-green-700', color: 'text-white' },
    ];
}