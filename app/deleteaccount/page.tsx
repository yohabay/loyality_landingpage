export default function DeleteAccount() {
  return (
    <div className="min-h-screen bg-white font-sans py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Delete Your Account</h1>
        <p className="text-sm text-gray-600 mb-8">Last Updated: November 19, 2025</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Delete Your Account</h2>
          <p className="text-gray-700 mb-4">
            If you wish to delete your Gursha Rewards account, you can do so easily through the app or by contacting our support team. Please note that deleting your account is permanent and cannot be undone. Once deleted, all your data, points, rewards, and transaction history will be removed from our systems.
          </p>
          <p className="text-gray-700 mb-4">
            Before deleting your account, consider the following:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Any unredeemed points or rewards will be forfeited.</li>
            <li>You will lose access to all features and services.</li>
            <li>Your data will be deleted in accordance with our Privacy Policy.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Steps to Delete Your Account</h2>
          <h3 className="text-xl font-medium text-gray-900 mb-2">Option 1: Delete via the App</h3>
          <ol className="list-decimal list-inside text-gray-700 mb-4 ml-4">
            <li>Open the Gursha Rewards app on your device.</li>
            <li>Log in to your account if you haven't already.</li>
            <li>Go to the Settings or Profile section.</li>
            <li>Look for the "Account" or "Privacy" options.</li>
            <li>Select "Delete Account" or "Delete My Account".</li>
            <li>Follow the on-screen prompts to confirm the deletion.</li>
            <li>You may be asked to enter your password or provide a reason for deletion.</li>
          </ol>
          <p className="text-gray-700 mb-4">
            Once confirmed, your account will be scheduled for deletion, and you will receive a confirmation email.
          </p>

          <h3 className="text-xl font-medium text-gray-900 mb-2">Option 2: Delete via Email</h3>
          <p className="text-gray-700 mb-4">
            If you are unable to access the app or prefer to request deletion via email, please send us an email with the following information:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
            <li>Your full name</li>
            <li>Your registered email address or phone number</li>
            <li>A brief reason for deletion (optional)</li>
            <li>Subject line: "Account Deletion Request"</li>
          </ul>
          <p className="text-gray-700 mb-4">
            Send your request to: <strong>help@gursha.app</strong>
          </p>
          <p className="text-gray-700 mb-4">
            Our support team will process your request within 7-10 business days. You will receive a confirmation email once the deletion is complete.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">What Happens After Deletion</h2>
          <p className="text-gray-700 mb-4">
            Once your account is deleted:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>All personal information associated with your account will be permanently removed.</li>
            <li>Your points balance and reward history will be erased.</li>
            <li>You will no longer receive notifications or communications from us.</li>
            <li>Any active subscriptions or premium features will be canceled.</li>
          </ul>
          <p className="text-gray-700 mb-4">
            Please note that some data may be retained for legal, regulatory, or security purposes as outlined in our Privacy Policy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-700 mb-4">
            If you have any questions about deleting your account or need assistance, please don't hesitate to contact us:
          </p>
          <p className="text-gray-700 mb-2"><strong>Email:</strong> help@gursha.app</p>
          <p className="text-gray-700 mb-2"><strong>Address:</strong> Addis Ababa, Ethiopia</p>
          <p className="text-gray-700">
            We are here to help and will respond to your inquiries as quickly as possible.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Alternative Options</h2>
          <p className="text-gray-700 mb-4">
            If you're not ready to delete your account permanently, consider these alternatives:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li><strong>Deactivate temporarily:</strong> You can log out or uninstall the app without deleting your account.</li>
            <li><strong>Update preferences:</strong> Adjust your notification settings to reduce communications.</li>
            <li><strong>Contact support:</strong> Let us know if there's a specific issue we can help resolve.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Important Note</h2>
          <p className="text-gray-700">
            Deleting your account does not automatically cancel any subscriptions through Google Play. If you have an active subscription, please manage it through your Google Play account settings.
          </p>
        </section>
      </div>
    </div>
  );
}