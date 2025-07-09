import * as React from "react"
import { Link } from "gatsby";

import NavBar from "../../components/NavBar"

import Footer from "../../components/Footer"

const PageNotFound = () => {
    return (
        <div className="h-screen">
            <NavBar></NavBar>


            <div className="flex flex-col items-center justify-center min-h-screen py-24">
                {/* Heading */}
                <h1 className="doc-heading">Terms of Service</h1>
                <div className="flex flex-col w-full max-w-4xl px-6 text-center">
                    {/* Contents */}
                    <p className="doc-contents">
                        Please read these terms of service ("terms", "terms of service") carefully before using Counter Discord bot and counterbot.app (the "Service") operated by counterbot.app ("us", 'we", "our").
                    </p>
                    <p className="doc-contents">
                        We will provide their services to you, which are subject to the conditions stated below in this document. Every time you visit this website, use its services or make a purchase, you accept the following conditions.
                    </p>
                    <p className="doc-contents">
                        By using the service, you represent and warrant that you agree to these terms and have the legal capacity to do so.
                    </p>
                </div>

                <div className="flex flex-col w-full max-w-4xl px-6 text-center">
                    {/* Sub Heading */}
                    <h2 className="doc-sub-heading">Privacy</h2>
                    {/* Contents */}
                    <p className="doc-contents">
                        When you visit this website or use the service, we collect information about you. Please review our <Link to="/privacy-policy"><b>privacy policy</b></Link> for further information.
                    </p>
                </div>

                <div className="flex flex-col w-full max-w-4xl px-6 text-center">
                    {/* Sub Heading */}
                    <h2 className="doc-sub-heading">User Guidelines</h2>
                    {/* Contents */}
                    <p className="doc-contents">
                        1. Do not take any actions to attempt to abuse or, purposely disrupt or cause other damage to the service.
                        2. Do not use the service inconsistent with applicable laws or regulations of your local region and Australia.
                        3. Do not attempt to access any data you are not permitted to.
                        4. Do not interfere with, disrupt, or create an undue burden on the service, networks, or services connected to the service.
                        5. Do not attempt to bypass any measures of the service designed to prevent or restrict access to the service or any portion of the service.
                        6. Do not use the service to, or in association with, a way that would violate the Discord Terms of Service or Discord Community Guidelines.
                    </p>
                </div>

                <div className="flex flex-col w-full max-w-4xl px-6 text-center">
                    {/* Sub Heading */}
                    <h2 className="doc-sub-heading">Termination</h2>
                    {/* Contents */}
                    <p className="doc-contents">
                        We reserve the right to terminate your access to the service immediately, under our sole discretion, without prior notice or liability, for any reason, including, but not limited to, a breach of the terms.
                    </p>
                </div>

                <div className="flex flex-col w-full max-w-4xl px-6 text-center">
                    {/* Sub Heading */}
                    <h2 className="doc-sub-heading">Indemnity</h2>
                    {/* Contents */}
                    <p className="doc-contents">
                    You shall indemnify us against all liabilities, costs, expenses, damages and losses (including any direct, indirect or consequential losses, loss of profit, loss of reputation and all interest, penalties and legal and other reasonable professional costs and expenses) suffered or incurred by you arising out of or in connection with your use of the service, or a breach of the terms.
                    </p>
                </div>

                <div className="flex flex-col w-full max-w-4xl px-6 text-center">
                    {/* Sub Heading */}
                    <h2 className="doc-sub-heading">Limited Liability</h2>
                    {/* Contents */}
                    <p className="doc-contents">
                    The service is provided "as is" without warranty, express or implied. In no event shall we be liable for any claim, damages or other liability, whether in an action of contract, tort or otherwise, arising from, out of or in connection with the service or the use or other dealings in the service.
                    </p>
                </div>
            </div>

            <Footer></Footer>
        </div>
    )
}

export default PageNotFound

export const Head = () => <title>Privacy Policy</title>