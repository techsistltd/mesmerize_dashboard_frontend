export const renderStatusColor = (value) => {
    switch (value) {
        case "ACTIVE":
            return "#67A13E";

        case "INACTIVE":
            return "#EA5046";

        case "DRAFT":
            return "#8F6A97";

        case "ARCHIVE":
            return "#EA5046";

        default:
            break;
    }
};