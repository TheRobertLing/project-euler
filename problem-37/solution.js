// the first and last number must be 3 or 7. This is because being doubly truncatable means the final number cannot be a 2 or 5
// Therefore the the first number cannot be a 2 or 5 either
// The numbers in the middle can only be odd since right truncation means the the middle digit would become the last digit after truncating and numbers that are even cannot be prime
// numbers in the middle can only be 3 7 9 since 2 and 5 would mean divisibility by 2 or 5
// 2 * 2 options for 2 digits
// 2 * 3 * 2 options for 3 digits
// 2 * 3 * 3 * 2 options for 4 digits
// 
