import viandenoCuiteA from "@/assets/viandenoCuiteA.png";
import viandeCuiteB from "@/assets/viandeCuiteB.png";
import { MdDelete } from "react-icons/md";

export const dataCommands = {
    total: 60,
    products: [
        {
            id: 1,
            img: viandenoCuiteA,
            name: "poules de chair",
            commands: [
                {
                    smallPrice: 10,
                },
                {
                    largePrice: 10,
                },
            ],
            tot: 20,
        },
        {
            id: 2,
            img: viandeCuiteB,
            name: "poules de chair22",
            commands: [
                {
                    smallPrice: 30,
                },
                {
                    largePrice: 10,
                },
            ],
            tot: 40
        }
    ]
}