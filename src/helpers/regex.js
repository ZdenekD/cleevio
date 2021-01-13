const regex = {
    text: /^[éěëščřžýáäíïťďňöúůüÿÉĚËŠČŘŽÝÁÄÍÏŤĎŇÖÚŮÜŸ \-,.'"\w\s\d]+$/,
    zip: /^\d{3}(\s)?\d{2}$/,
};

export default regex;
